import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview } from "#app/utils/storybook.ts";
import { Field } from "./form.tsx";

const meta = {
  title: "Molecules/Form/Field",
  component: Field,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=550-26&m=dev"
    ),
  },
  args: {
    labelProps: {
      children: "Adres email",
    },
    inputProps: {
      value: "michal.kolacz44@gmail.com",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const WithError: Story = {
  args: {
    inputProps: {
      value: "",
    },
    errors: ["Adres e-mail jest wymagany."],
  },
};
