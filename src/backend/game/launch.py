from __future__ import annotations

import logging
import os
from pathlib import Path
from typing import TYPE_CHECKING

import packagemanager
import shell
from report import Report

from .download import download_version

if TYPE_CHECKING:
    from typing import Callable

    from core.instance import Instance
    from core.version import Architecture, Version


def launch(instance: Instance, reporthook: Callable[[Report], object] | None = None) -> None:
    logging.info('Launching the instance "%s" at "%s"...', instance.name, instance.directory)
    if reporthook:
        reporthook(Report(Report.PROGRESS, "Checking game files"))

    _grant_access(instance.directory, instance.version.user_sid)

    if not instance.version.is_downloaded(instance.architecture_choice):
        logging.info("Downloading Minecraft %s...", instance.version.name)
        download_version(instance.version, instance.architecture_choice, reporthook)

    if not instance.version.is_installed(instance.architecture_choice):
        _install(instance.version, instance.architecture_choice, reporthook)

    _relink_game_files(instance)

    logging.info("Launching Minecraft %s...", instance.version.name)
    if reporthook:
        reporthook(Report(Report.PROGRESS, "Launching the game"))
    packagemanager.launch_package(instance.version.pfn, "App")


def _grant_access(directory: Path, user_sid: str) -> None:
    cmd = f'icacls "{directory}" /grant:r *{user_sid}:(OI)(CI)F /t'
    shell.run_command(cmd, False)


def _install(
    version: Version,
    architecture: Architecture,
    reporthook: Callable[[Report], object] | None = None,
) -> None:
    if reporthook:
        reporthook(Report(Report.PROGRESS, "Unlinking the old version"))
    for package_dict in packagemanager.find_packages(version.pfn):
        packagemanager.remove_package(package_dict)

    logging.info("Installing Minecraft %s...", version.name)
    if reporthook:
        reporthook(Report(Report.PROGRESS, "Installing the game"))
    packagemanager.add_package(version.packages[architecture])


def _relink_game_files(instance: Instance) -> None:
    logging.debug('Relinking to a new game folder at "%s"', instance.directory / "com.mojang")

    localappdata_path = os.getenv("LOCALAPPDATA")
    if not localappdata_path:
        raise FileNotFoundError

    default_game_directory_parent = Path(localappdata_path) / "Packages" / instance.version.pfn / "LocalState" / "games"

    default_game_directory_parent.mkdir(parents=True, exist_ok=True)
    shell.clear_directory(default_game_directory_parent)

    (default_game_directory_parent / "com.mojang").symlink_to(instance.directory / "com.mojang", True)