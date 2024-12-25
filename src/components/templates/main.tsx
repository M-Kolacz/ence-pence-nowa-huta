import { type ComponentPropsWithoutRef } from "react";
import { cn } from "#app/utils/misc.tsx";

export const Main = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"main">) => {
  return (
    <main
      className={cn(
        "col-span-full grid grid-cols-1 gap-y-section lg:grid-cols-12",
        className
      )}
      {...props}
    />
  );
};
