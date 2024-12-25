import { Slot } from "@radix-ui/react-slot";
import { type ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "#app/utils/misc.tsx";
import { variants, type ButtonVariants } from "./button-variants.ts";

export type ButtonProps = {
  asChild?: boolean;
} & ComponentPropsWithRef<"button"> &
  ButtonVariants;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
