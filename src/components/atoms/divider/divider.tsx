import { type ComponentProps } from 'react'
import { cn } from '#app/utils/misc.tsx'

export const Divider = ({ className, ...props }: ComponentProps<'div'>) => {
	return (
		<div
			className={cn('h-[2px] w-full rounded-sm bg-primary-100', className)}
			{...props}
		/>
	)
}
