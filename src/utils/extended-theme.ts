import { type Config } from 'tailwindcss'

export const extendedTheme = {
	colors: {
		border: 'hsl(var(--border))',
		input: 'hsl(var(--input))',
		ring: 'hsl(var(--ring))',
		background: 'hsl(var(--background))',
		foreground: 'hsl(var(--foreground))',
		primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		},
		secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		},
		destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		},
		muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		},
		accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		},
		popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		},
		card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		},
		text: {
			DEFAULT: 'hsl(var(--text))',
			foreground: 'hsl(var(--text-foreground))',
			inactive: 'hsl(var(--text-inactive))',
			subtle: 'hsl(var(--text-subtle))',
		},
	},
	borderRadius: {
		lg: `var(--radius)`,
		md: `calc(var(--radius) - 2px)`,
		sm: 'calc(var(--radius) - 4px)',
	},

	keyframes: {
		'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		},
		'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		},
	},
	animation: {
		'accordion-down': 'accordion-down 0.2s ease-out',
		'accordion-up': 'accordion-up 0.2s ease-out',
	},

	spacing: {
		app: 'var(--spacing-app)',
		section: 'var(--spacing-section)',
		subtle: 'var(--spacing-subtle)',
		base: 'var(--spacing-base)',
		strong: 'var(--spacing-strong)',
	},
	backgroundColor: {
		subtle: 'var(--bg-subtle)',
		base: 'var(--bg-base)',
		strong: 'var(--bg-strong)',
	},
	fontSize: {
		h1: [
			'var(--text-h1)',
			{
				lineHeight: 'var(--line-h1)',
				fontWeight: 700,
			},
		],
		h2: [
			'var(--text-h2)',
			{
				lineHeight: 'var(--line-h2)',
				fontWeight: 700,
			},
		],
		h3: [
			'var(--text-h3)',
			{
				lineHeight: 'var(--line-h3)',
				fontWeight: 700,
			},
		],
		p1: [
			'var(--text-p1)',
			{
				lineHeight: 'var(--line-p1)',
				fontWeight: 400,
			},
		],
		p2: [
			'var(--text-p2)',
			{
				lineHeight: 'var(--line-p2)',
				fontWeight: 400,
			},
		],
		p3: [
			'var(--text-p3)',
			{
				lineHeight: 'var(--line-p3)',
				fontWeight: 400,
			},
		],
		p4: [
			'var(--text-p4)',
			{
				lineHeight: 'var(--line-p4)',
				fontWeight: 400,
			},
		],
		p5: [
			'var(--text-p5)',
			{
				lineHeight: 'var(--line-p5)',
				fontWeight: 400,
			},
		],
		b1: [
			'var(--text-b1)',
			{
				lineHeight: 'var(--line-b1)',
				fontWeight: 500,
			},
		],
		b2: [
			'var(--text-b2)',
			{
				lineHeight: 'var(--line-b2)',
				fontWeight: 500,
			},
		],
	},
	borderColor: {
		subtle: 'var(--border-subtle)',
		base: 'var(--border-base)',
		strong: 'var(--border-strong)',
	},
} satisfies Config['theme']
