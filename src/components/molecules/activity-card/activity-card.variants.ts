import { cva, type VariantProps } from 'class-variance-authority'

export const variations = ['sport', 'music', 'art'] as const
export type Variations = (typeof variations)[number]
const variant = {
	sport: ['bg-success-700'],
	music: ['bg-error-700'],
	art: ['bg-primary-700'],
} satisfies Record<Variations, Array<string>>

export const variants = cva(
	['flex', 'w-[308px]', 'flex-col', 'gap-strong', 'rounded-[24px]', 'py-6'],
	{
		variants: {
			variant,
		},
		defaultVariants: {
			variant: 'sport',
		},
	},
)

export type ActivityCardVariants = VariantProps<typeof variants>
