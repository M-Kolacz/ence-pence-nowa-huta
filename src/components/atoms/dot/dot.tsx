import { type ComponentProps } from 'react'
import { cn } from '#app/utils/misc.tsx'
import { variants } from './dot.variants.ts'

export type DotProps = ComponentProps<'button'> & {
	isActive?: boolean
}

export const Dot = ({ className, isActive = false, ...props }: DotProps) => {
	return <button className={cn(variants({ className, isActive }))} {...props} />
}
