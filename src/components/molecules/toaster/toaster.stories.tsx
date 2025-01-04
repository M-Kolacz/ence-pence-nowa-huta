import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview, disableA11yRules } from "#app/utils/storybook.ts";
import { Toaster } from "./toaster.tsx";
import { Button } from "#app/components/atoms";
import { toast } from "sonner";
import { toasts } from "#app/components/organisms/contact/contact-form/contact-form.helpers.ts";
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Molecules/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
    ...disableA11yRules(["color-contrast"]),
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-2440&m=dev"
    ),
  },
  args: {
    position: "top-center",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: (args) => {
    return (
      <div>
        <Button
          onClick={() => {
            toast.loading(toasts["loading"].title, {
              description: toasts["loading"].description,
            });
          }}
        >
          Show toast
        </Button>
        <Toaster visibleToasts={1} {...args} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);
  },
};

export const Variants: Story = {
  render: (args) => {
    return (
      <div>
        <Button
          onClick={() => {
            const toastsTypes = Object.keys(toasts) as Array<
              keyof typeof toasts
            >;

            toastsTypes.forEach((type) => {
              toast[type](toasts[type].title, {
                description: toasts[type].description,
              });
            });
          }}
        >
          Show toasts
        </Button>
        <Toaster visibleToasts={3} {...args} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);
  },
};
