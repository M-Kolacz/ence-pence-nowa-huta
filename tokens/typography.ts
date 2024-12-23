import { fontFamily } from 'tailwindcss/defaultTheme'

export const typography = {
	fontFamily: {
		headings: ['Roboto Condensed Variable', ...fontFamily.sans] as string[],
		sans: ['Roboto', ...fontFamily.sans] as string[],
	},
	fontWeight: {
		normal: '400',
		medium: '500',
		bold: '700',
	},
	lineHeight: {
		xs: '16px',
		sm: '20px',
		base: '24px',
		lg: '24px',
		xl: '28px',
		'2xl': '36px',
		'3xl': '36px',
		'4xl': '40px',
		'5xl': '56px',
		'6xl': '72px',
		'7xl': '84px',
	},
	fontSize: {
		xs: '12px',
		sm: '14px',
		base: '16px',
		lg: '18px',
		xl: '20px',
		'2xl': '24px',
		'3xl': '30px',
		'4xl': '36px',
		'5xl': '48px',
		'6xl': '60px',
		'7xl': '72px',
	},
} as const
