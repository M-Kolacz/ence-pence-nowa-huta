import { type SVGProps } from "react";
import { cn } from "#app/utils/misc.ts";
import { type IconName } from "./icons/name.ts";

export type { IconName };

export type IconProps = {
  name: IconName;

  /**
   * Pass `title` prop to the `Icon` component to get `<title>` element rendered
   * in the SVG container, providing this way for accessibility.
   */
  title?: string;
} & SVGProps<SVGSVGElement>;

/**
 * Renders an SVG icon. The icon defaults to the size of the font. To make it
 * align vertically with neighboring text, you can pass the text as a child of
 * the icon and it will be automatically aligned.
 * Alternatively, if you're not ok with the icon being to the left of the text,
 * you need to wrap the icon and text in a common parent and set the parent to
 * display "flex" (or "inline-flex") with "items-center" and a reasonable gap.
 */
export function Icon({
  name,
  className,
  title,
  children,
  ...props
}: IconProps) {
  if (children) {
    return (
      <span className={`inline-flex items-center`}>
        <Icon name={name} className={className} title={title} {...props} />
        {children}
      </span>
    );
  }
  return (
    <svg {...props} className={cn("inline h-6 w-6 self-center", className)}>
      {title ? <title>{title || name}</title> : null}
      <use href={`${process.env.NEXT_PUBLIC_SPRITE_SVG_URL}#${name}`} />
    </svg>
  );
}
