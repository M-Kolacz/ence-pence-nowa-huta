import { cva } from 'class-variance-authority'

export const variants = cva(
	[
		'px-2',
		'py-4',
		'rounded-md',
		'font-sans',
		'text-p1',
		'font-bold',
		'hover:text-primary',
		'focus-visible:outline-ring',
	],
	{
		variants: {
			active: {
				true: 'text-foreground',
				false: 'text-muted-foreground',
			},
		},
		defaultVariants: {
			active: false,
		},
	},
)
