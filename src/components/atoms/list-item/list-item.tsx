import { cn } from "#app/utils/misc";

export type ListItemProps = React.ComponentProps<"li"> & {
  icon?: React.ReactNode;
};

export const ListItem = ({
  icon,
  children,
  className,
  ...props
}: ListItemProps) => {
  return (
    <li
      className={cn(
        "flex gap-2  items-center max-w-prose text-p1 text-text-subtle",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </li>
  );
};
