import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview } from "#app/utils/storybook.ts";
import { TextareaField } from "./form.tsx";

const meta = {
  title: "Molecules/Form/Textarea",
  component: TextareaField,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=550-26&m=dev"
    ),
  },
  args: {
    labelProps: {
      children: "Twoja wiadomość",
    },
    textareaProps: {
      placeholder: "Opisz w czym możemy Ci pomóc",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof TextareaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const WithError: Story = {
  args: {
    textareaProps: {
      value: "",
    },
    errors: ["Wiadomość jest wymagana."],
  },
};
