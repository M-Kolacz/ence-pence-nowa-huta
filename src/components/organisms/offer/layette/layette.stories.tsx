import { type Meta, type StoryObj } from "@storybook/react";
import { AppContainer } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";
import { Layette } from "./layette.tsx";

const meta = {
  title: "Organisms/Offer/Layette",
  component: Layette,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=467-1178&t=nWj3xrDFwTTZ7yj3-4"
    ),
  },
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <AppContainer>
        <Story />
      </AppContainer>
    ),
  ],
} satisfies Meta<typeof Layette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  parameters: {
    ...setViewport("Mobile"),
  },
};

export const Tablet: Story = {
  parameters: {
    ...setViewport("Tablet"),
  },
};

export const Desktop: Story = {
  parameters: {
    ...setViewport("Desktop"),
  },
};
