"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "~/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-3.5 has-[:disabled]:opacity-50 text-white",
      containerClassName,
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center text-white", className)}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    index: number;
    setIsFocused: (value: boolean) => void;
  }
>(({ index, className, setIsFocused, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  // @ts-expect-error "Any"
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  React.useEffect(() => {
    setIsFocused(isActive);
  }, [isActive, setIsFocused]);

  return (
    <div
      ref={ref}
      className={cn(
        "text-base relative flex h-12 w-2.5 items-center justify-center border-none text-white outline-none transition-all first:text-center xl:h-[52px]",
        !hasFakeCaret &&
          !char &&
          "text-white/50 before:absolute before:content-['x']",
        className,
      )}
      {...props}
    >
      <span className="block mt-px mr-[2px]">{char}</span>
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-slate-950 duration-1000 dark:bg-slate-50" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
