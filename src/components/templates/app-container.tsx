import { type ComponentPropsWithoutRef } from "react";
import { cn } from "#app/utils/misc.tsx";

export const AppContainer = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-[1920px] grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-section p-app lg:grid-cols-12",
        className
      )}
      {...props}
    />
  );
};
