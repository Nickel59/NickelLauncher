from typing import Self

from PySide6.QtWidgets import QWidget, QDialog
from PySide6.QtCore import Qt, Signal

from ui.dialoglaunch.ui_dialoglaunch import Ui_DialogLaunch


class DialogLaunch(QDialog):
    closed = Signal()

    def __init__(self, parent: QWidget | None = None):
        super().__init__(parent)
        self.setAttribute(Qt.WidgetAttribute.WA_DeleteOnClose)

        self._ui = Ui_DialogLaunch()
        self._ui.setupUi(self)
        self._setup_signals()

    @property
    def widget(self) -> Self:
        return self

    def spawn_async(self):
        self.setModal(True)
        self.show()

    def set_text(self, text: str):
        self._ui.label.setText(text)

    def set_progressbar_percentage(self, percentage: int):
        self._ui.progress_bar.setMaximum(100)
        self._ui.progress_bar.setValue(percentage)

    def set_progressbar_undefined(self):
        self._ui.progress_bar.setMaximum(0)

    def _setup_signals(self):
        self._ui.button.clicked.connect(self.close)
        self.finished.connect(self.closed.emit)
