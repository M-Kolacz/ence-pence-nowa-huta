import { type ComponentProps } from "react";
import { cn } from "#app/utils/misc.tsx";
import Image, { ImageProps } from "next/image";

export const AvatarRoot = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("flex gap-4", className)} {...props} />;
};

export const AvatarImg = (props: ImageProps) => {
  return <Image {...props} alt={props.alt || ""} />;
};
export const AvatarTextRoot = (props: ComponentProps<"div">) => {
  return <div {...props} />;
};
export const AvatarTitle = ({ className, ...props }: ComponentProps<"p">) => {
  return <p className={cn("text-p2 text-text-subtle", className)} {...props} />;
};
export const AvatarCaption = ({ className, ...props }: ComponentProps<"p">) => {
  return <p className={cn("text-p1 text-text", className)} {...props} />;
};
