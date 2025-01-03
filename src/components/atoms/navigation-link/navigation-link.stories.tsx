import { type Meta, type StoryObj } from "@storybook/react";
import { disableControls, setDesignPreview } from "#app/utils/storybook.ts";
import { NavigationLink } from "./navigation-link.tsx";

const meta = {
  title: "Atoms/Navigation Link",
  component: NavigationLink,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-2347&m=dev"
    ),
  },
  args: { children: "Strona główna", href: "/abc" },
  argTypes: {
    ...disableControls<typeof NavigationLink>(["about"]),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {},
};

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="flex gap-4">
        <NavigationLink {...args} href="/" />
        <NavigationLink {...args} href="/abc" />
      </div>
    );
  },
  argTypes: {
    ...disableControls<typeof NavigationLink>(["href"]),
  },
};
