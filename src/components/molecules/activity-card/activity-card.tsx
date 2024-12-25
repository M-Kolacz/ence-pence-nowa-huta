import { type ComponentPropsWithoutRef } from 'react'
import { cn } from '#app/utils/misc.tsx'
import { activityCardState } from './activity-card.helpers.ts'
import {
	variants,
	type ActivityCardVariants,
} from './activity-card.variants.ts'
import Image from 'next/image'

type ActivityCardProps = ComponentPropsWithoutRef<'div'> & ActivityCardVariants

export const ActivityCard = ({
	className,
	variant,
	...props
}: ActivityCardProps) => {
	return (
		<div className={cn(variants({ variant, className }))} {...props}>
			<div className="flex flex-col gap-subtle px-4">
				<p className="text-p3 text-text-foreground">
					{activityCardState[variant!].title}
				</p>
				<p className="text-p1 font-bold text-text-foreground">
					{activityCardState[variant!].description}
				</p>
			</div>
			<Image src={activityCardState[variant!].src} alt="" />
		</div>
	)
}
