import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview } from "#app/utils/storybook.ts";
import { Input } from "./input.tsx";
import { within } from "@storybook/test";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-2401&m=dev"
    ),
  },
  args: {
    placeholder: "Type here",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Focused: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    input.focus();
  },
};
