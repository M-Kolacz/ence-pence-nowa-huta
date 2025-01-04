import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview, disableControls } from "#app/utils/storybook.ts";
import { Dot } from "./dot.tsx";

const meta = {
  title: "Atoms/Dot",
  component: Dot,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-2349&m=dev"
    ),
  },
  args: {
    isActive: false,
    "aria-label": "Dot",
  },
  tags: ["autodocs"],
  argTypes: {
    ...disableControls<typeof Dot>(["aria-label"]),
  },
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const States: Story = {
  render: (args) => {
    return (
      <div className="flex space-x-4">
        <Dot {...args} />
        <Dot {...args} isActive />
      </div>
    );
  },
  argTypes: {
    ...disableControls<typeof Dot>(["isActive"]),
  },
};
