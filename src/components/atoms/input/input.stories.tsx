import { type Meta, type StoryObj } from '@storybook/react'
import { setDesignPreview } from '#app/utils/storybook.ts'
import { Input } from './input.tsx'

const meta = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=400-19&t=0krL8ZQrd8XQnKop-4',
		),
	},
	args: {
		placeholder: 'Type here',
	},
	argTypes: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {},
}

export const Disabled: Story = {
	args: { disabled: true },
}
