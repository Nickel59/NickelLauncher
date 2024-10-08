import * as Popover from "@radix-ui/react-popover";
import * as React from "react";

import { cn, useTriggerEffect } from "@/utils";

export const EditableLabel = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> & {
    readonly editModeTrigger: boolean;
    readonly defaultValue: string;
    readonly maxLength?: number;
    readonly applyOnAboutToSave?: (value: string) => string;
    readonly isAllowedToSave?: (value: string) => boolean;
    readonly onSave?: (value: string) => void;
  }
>(
  (
    { className, editModeTrigger, defaultValue, maxLength, applyOnAboutToSave, isAllowedToSave, onSave, ...props },
    ref,
  ) => {
    React.useImperativeHandle(ref, () => labelRef.current as Exclude<typeof labelRef.current, null>, []);

    const [value, setValue] = React.useState(maxLength === undefined ? defaultValue : defaultValue.slice(0, maxLength));
    const [editMode, setEditMode] = React.useState(false);
    const [height, setHeight] = React.useState(0);

    const labelRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    useTriggerEffect(() => {
      if (editMode) {
        return;
      }
      if (labelRef.current) {
        setHeight(labelRef.current?.clientHeight);
      }
      setEditMode(true);
    }, editModeTrigger);

    React.useEffect(() => {
      if (editMode) {
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    }, [editMode]);

    return (
      <>
        <div className={cn("overflow-hidden text-ellipsis whitespace-pre", className)} ref={labelRef} {...props}>
          {editMode ? "" : value}
        </div>
        {editMode && (
          <Popover.Root open={true} modal={true}>
            <Popover.Portal>
              <Popover.Content
                className="absolute"
                style={{
                  left: (labelRef.current?.getBoundingClientRect().left as number) - 4,
                  top: labelRef.current?.getBoundingClientRect().top,
                }}
                asChild={true}
              >
                <DynamicInput
                  style={{
                    height: height,
                    font: window
                      .getComputedStyle(labelRef.current as Exclude<typeof labelRef.current, null>)
                      .getPropertyValue("font"),
                  }}
                  ref={inputRef}
                  defaultValue={value}
                  maxLength={maxLength}
                  onBlur={() => setEditMode(false)}
                  onContextMenu={(event) => event.stopPropagation()}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      return setEditMode(false);
                    }
                    if (!(event.key === "Enter")) {
                      return;
                    }
                    const newValue =
                      applyOnAboutToSave?.(event.currentTarget.value ?? "") ?? event.currentTarget.value ?? "";
                    if (isAllowedToSave && !isAllowedToSave(newValue)) {
                      return;
                    }
                    if (newValue === value) {
                      return setEditMode(false);
                    }
                    onSave?.(newValue);
                    setValue(newValue);
                    setEditMode(false);
                  }}
                />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        )}
      </>
    );
  },
);

const DynamicInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, onFocus, onChange, ...props }, ref) => {
    return (
      <input
        className={cn("bg-black px-1", className)}
        ref={ref}
        onFocus={(event) => {
          adjustInputWidth(event);
          onFocus?.(event);
        }}
        onChange={(event) => {
          const trimmedValue = event.currentTarget.value.trimStart();
          const selectionRange = [
            event.currentTarget.value === trimmedValue ? event.currentTarget.selectionStart : 0,
            event.currentTarget.value === trimmedValue ? event.currentTarget.selectionEnd : 0,
            event.currentTarget.selectionDirection === null ? undefined : event.currentTarget.selectionDirection,
          ] as const;
          event.currentTarget.value = trimmedValue;
          event.currentTarget.setSelectionRange(...selectionRange);
          adjustInputWidth(event);
          onChange?.(event);
        }}
        {...props}
      />
    );
  },
);

function adjustInputWidth(event: React.FocusEvent<HTMLInputElement, Element> | React.ChangeEvent<HTMLInputElement>) {
  event.target.style.width = "16px";
  event.target.style.width = `${event.target.scrollWidth}px`;
}
