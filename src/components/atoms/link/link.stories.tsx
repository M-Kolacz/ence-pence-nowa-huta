import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview } from "#app/utils/storybook.ts";
import { Link } from "./link.tsx";

const meta = {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-2351&m=dev"
    ),
  },
  args: {
    children: "Click me",
    href: "https://www.facebook.com/encepencehuta",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
