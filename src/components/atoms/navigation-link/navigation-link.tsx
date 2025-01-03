"use client";

import { cn } from "#app/utils/misc.tsx";
import { type ComponentProps } from "react";
import { variants } from "./navigation-link-variants.ts";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = (props: ComponentProps<"a">) => {
  const { className, href = "", ...restProps } = props;

  const currentPathname = usePathname();
  const isActiveLink = currentPathname === href;

  return (
    <Link
      className={cn(variants({ active: isActiveLink }), className)}
      href={href}
      {...restProps}
    />
  );
};

export { NavigationLink };
