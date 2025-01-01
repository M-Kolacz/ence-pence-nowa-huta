import { type Meta, type StoryObj } from '@storybook/react'
import { setDesignPreview } from '#app/utils/storybook.ts'
import { Label } from './label.tsx'

const meta = {
	title: 'Atoms/Label',
	component: Label,
	parameters: {
		layout: 'centered',
		...setDesignPreview(''),
	},
	args: {
		children: 'Label',
	},
	argTypes: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {},
}
