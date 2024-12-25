import { cva, type VariantProps } from 'class-variance-authority'

export const variants = cva(
	[
		'h-6',
		'w-6',
		'rounded-full',
		'transition-colors',
		'hover:bg-primary/90',
		'focus-visible:outline-none',
		'focus-visible:ring-2',
		'focus-visible:ring-ring',
		'focus-visible:ring-offset-2',
	],
	{
		variants: {
			isActive: {
				true: [
					'bg-background',
					'border-4',
					'border-primary',
					'border-solid',
					'hover:border-primary/90',
				],
				false: ['bg-primary'],
			},
		},
		defaultVariants: {
			isActive: false,
		},
	},
)

export type ButtonVariants = VariantProps<typeof variants>
