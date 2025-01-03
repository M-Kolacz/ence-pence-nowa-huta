import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview } from "#app/utils/storybook.ts";
import { Divider } from "./divider.tsx";

const meta = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-2350&m=dev"
    ),
  },
  args: {},
  decorators: [
    (Story) => (
      <div className="w-[250px]">
        <Story />
      </div>
    ),
  ],

  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
