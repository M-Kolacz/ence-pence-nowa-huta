import { type ComponentPropsWithoutRef } from "react";
import { cn } from "#app/utils/misc.tsx";

export const Section = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      className={cn("col-span-full lg:col-start-2 lg:col-end-12", className)}
      {...props}
    />
  );
};
