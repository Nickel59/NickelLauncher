import { CaretDownIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { InstanceButton } from "@/components/instance-button";
import { EditableLabel } from "@/components/nickel/editable-label";
import { Button } from "@/components/shadcn/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/shadcn/collapsible";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/shadcn/context-menu";
import type { InstanceGroup } from "@/core-types";
import { useStore } from "@/store";
import { useTrigger } from "@/utils";

export const InstanceGroupCollapsible = React.forwardRef<
  React.ElementRef<typeof Collapsible>,
  React.ComponentPropsWithoutRef<typeof Collapsible> & { readonly state: InstanceGroup }
>(({ state, open: _open, onOpenChange: _onOpenChange, ...props }, ref) => {
  const contextMenuContentRef = React.useRef<React.ElementRef<typeof ContextMenuContent>>(null);

  const reloadInstanceGroups = useStore((state) => state.reloadInstanceGroups);

  const [editableLabelTrigger, fireEditableLabelTrigger] = useTrigger();

  return (
    <Collapsible
      ref={ref}
      open={!state.hidden}
      onOpenChange={() => pywebview.api.toggleInstanceGroupHidden(state.name).then(reloadInstanceGroups)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <CollapsibleTrigger asChild={true}>
          <Button className="data-[state=closed]:-rotate-90" variant="ghost" size="icon">
            <CaretDownIcon />
          </Button>
        </CollapsibleTrigger>
        {state.name && (
          <ContextMenu>
            <ContextMenuTrigger asChild={true}>
              <EditableLabel
                tabIndex={state.name ? 0 : -1}
                onKeyUp={(event) => {
                  if (event.key === "F2") {
                    fireEditableLabelTrigger();
                  } else if (event.key === "Delete") {
                    pywebview.api.deleteInstanceGroup(state.name).then(reloadInstanceGroups);
                  }
                }}
                editModeTrigger={editableLabelTrigger}
                defaultValue={state.name}
                maxLength={50}
                applyOnAboutToSave={(value) => value.trim()}
                isAllowedToSave={(value) => value.length > 0}
                onSave={(value) => pywebview.api.renameInstanceGroup(state.name, value).then(reloadInstanceGroups)}
              />
            </ContextMenuTrigger>
            <ContextMenuContent ref={contextMenuContentRef}>
              <ContextMenuItem
                onSelect={() =>
                  contextMenuContentRef.current?.addEventListener(
                    "animationend",
                    () => setTimeout(fireEditableLabelTrigger),
                    { once: true },
                  )
                }
              >
                Rename
                <ContextMenuShortcut>F2</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem
                onSelect={() => pywebview.api.deleteInstanceGroup(state.name).then(reloadInstanceGroups)}
              >
                Delete
                <ContextMenuShortcut>Del</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </div>
      <CollapsibleContent className="my-1 flex flex-wrap gap-3 data-[state=closed]:hidden" forceMount={true}>
        {state.instances.map((instance) => (
          <InstanceButton key={instance.name} state={instance} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
});
