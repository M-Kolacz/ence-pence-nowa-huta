import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview } from "#app/utils/storybook.ts";
import {
  AvatarRoot,
  AvatarImg,
  AvatarTextRoot,
  AvatarCaption,
  AvatarTitle,
} from "./avatar.tsx";
import { testimonials } from "#app/components/organisms/homepage/testimonials/testimonials.helpers.ts";

const meta = {
  title: "Molecules/Avatar",
  component: AvatarRoot,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-24104&m=dev"
    ),
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AvatarRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: (args) => {
    return (
      <AvatarRoot {...args}>
        <AvatarImg src={testimonials[0].src} alt="" />
        <AvatarTextRoot>
          <AvatarTitle>{testimonials[0].avatarTitle}</AvatarTitle>
          <AvatarCaption>{testimonials[0].avatarCaption}</AvatarCaption>
        </AvatarTextRoot>
      </AvatarRoot>
    );
  },
};

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        {testimonials.map(({ avatarCaption, avatarTitle, src }) => (
          <AvatarRoot key={avatarTitle} {...args}>
            <AvatarImg src={src} alt="" />
            <AvatarTextRoot>
              <AvatarTitle>{avatarTitle}</AvatarTitle>
              <AvatarCaption>{avatarCaption}</AvatarCaption>
            </AvatarTextRoot>
          </AvatarRoot>
        ))}
      </div>
    );
  },
};
