import { type Meta, type StoryObj } from '@storybook/react'
import { setDesignPreview } from '#app/utils/storybook.ts'
import {
	AvatarRoot,
	AvatarImg,
	AvatarTextRoot,
	AvatarCaption,
	AvatarTitle,
} from './avatar.tsx'

const meta = {
	title: 'Molecules/Avatar',
	component: AvatarRoot,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=271-5457&t=FP6B4g9BwT0pCpt3-4',
		),
	},

	tags: ['autodocs'],
} satisfies Meta<typeof AvatarRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	render: args => {
		return (
			<AvatarRoot {...args}>
				<AvatarImg src="/img/parents/1.svg" alt="" />
				<AvatarTextRoot>
					<AvatarTitle>Patrycja</AvatarTitle>
					<AvatarCaption>Mama Łucji</AvatarCaption>
				</AvatarTextRoot>
			</AvatarRoot>
		)
	},
}
