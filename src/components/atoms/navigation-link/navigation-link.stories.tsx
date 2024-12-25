import { type Meta, type StoryObj } from '@storybook/react'
import { disableControls, setDesignPreview } from '#app/utils/storybook.ts'
import { NavigationLink } from './navigation-link.tsx'

const meta = {
	title: 'Atoms/Navigation Link',
	component: NavigationLink,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-32&t=fp53uoEO5s9CIEdr-4',
		),
	},
	args: { children: 'Strona główna', to: '/abc' },
	argTypes: {
		...disableControls<typeof NavigationLink>(['about']),
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NavigationLink>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {},
}

export const Variants: Story = {
	render: args => {
		return (
			<div className="flex gap-4">
				<NavigationLink {...args} to="/" />
				<NavigationLink {...args} to="/abc" />
			</div>
		)
	},
	argTypes: {
		...disableControls<typeof NavigationLink>(['to']),
	},
}
