import { type Meta, type StoryObj } from "@storybook/react";
import { disableControls, setDesignPreview } from "#app/utils/storybook.ts";
import { ActivityCard } from "./activity-card.tsx";
import { variations } from "./activity-card.variants.ts";

const meta = {
  title: "Molecules/ActivityCard",
  component: ActivityCard,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-24103&m=dev"
    ),
  },
  args: {
    variant: "art",
  },
  argTypes: {
    variant: {
      options: variations,
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ActivityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="flex gap-4">
        {variations.map((variant) => (
          <ActivityCard key={variant} {...args} variant={variant} />
        ))}
      </div>
    );
  },
  argTypes: {
    ...disableControls<typeof ActivityCard>(["variant"]),
  },
};
