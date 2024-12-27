import { type Meta, type StoryObj } from '@storybook/react'
import { setDesignPreview, disableControls } from '#app/utils/storybook.ts'
import { Dot } from './dot.tsx'

const meta = {
	title: 'Atoms/Dot',
	component: Dot,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=272-1386&t=GhlP2VAdQe4cmQbA-4',
		),
	},
	args: {
		isActive: false,
		'aria-label': 'Dot',
	},
	tags: ['autodocs'],
	argTypes: {
		...disableControls<typeof Dot>(['aria-label']),
	},
} satisfies Meta<typeof Dot>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {}

export const States: Story = {
	render: (args) => {
		return (
			<div className="flex space-x-4">
				<Dot {...args} />
				<Dot {...args} isActive />
			</div>
		)
	},
	argTypes: {
		...disableControls<typeof Dot>(['isActive']),
	},
}
