import { type Meta, type StoryObj } from '@storybook/react'
import { setDesignPreview } from '#app/utils/storybook.ts'
import { Icon } from './icon.tsx'
import { iconNames } from './icons/name.ts'

const meta = {
	title: 'Atoms/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=149-2&t=hULKaPxwkfdoOxEC-4',
		),
	},
	args: {
		name: 'add',
	},
	argTypes: {
		name: {
			control: { type: 'select' },
			options: iconNames,
			description: 'Name of the icon to render',
			type: 'string',
		},
	},
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {},
}
