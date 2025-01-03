import { type Meta, type StoryObj } from '@storybook/react'
import { setDesignPreview } from '#app/utils/storybook.ts'
import { Textarea } from './textarea.tsx'

const meta = {
	title: 'Atoms/Textarea',
	component: Textarea,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=402-1623&t=0krL8ZQrd8XQnKop-4',
		),
	},
	args: {
		placeholder: 'Type here',
	},
	argTypes: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {},
}

export const Disabled: Story = {
	args: { disabled: true },
}
