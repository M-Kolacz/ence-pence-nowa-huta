import { type SVGProps } from "react";
import { cn } from "#app/utils/misc.tsx";
import { type IconName } from "./icons/name.ts";

export type { IconName };

export const sizeClassName = {
  font: "w-[1em] h-[1em]",
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
  extraLarge: "w-16 h-16",
} as const;
export type Size = keyof typeof sizeClassName;
export const sizes = Object.keys(sizeClassName) as Size[];

export type IconProps = {
  name: IconName;
  size?: Size;
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
  size = "medium",
  ...props
}: IconProps) {
  if (children) {
    return (
      <span className={`inline-flex items-center`}>
        <Icon
          size={size}
          name={name}
          className={className}
          title={title}
          {...props}
        />
        {children}
      </span>
    );
  }
  return (
    <svg
      {...props}
      className={cn(sizeClassName[size], "inline self-center", className)}
    >
      {title ? <title>{title || name}</title> : null}
      <use href={`icons/sprite.svg#${name}`} />
    </svg>
  );
}
