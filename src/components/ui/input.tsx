import * as React from "react";
import { type FieldError } from "react-hook-form";

import { cn } from "~/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

type InputPropsExtended = InputProps & { error: FieldError | undefined };

const Input = React.forwardRef<HTMLInputElement, InputPropsExtended>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "text-base flex h-12 xl:h-[52px] xl:rounded-[17px] items-center rounded-[12px] ring-[1px] ring-light bg-transparent px-[18px] text-white outline-none placeholder:text-white/50 focus-within:ring-[2px]",
          error?.message && "border-red",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
