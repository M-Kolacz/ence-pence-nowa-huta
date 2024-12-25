import { type Meta, type StoryObj } from "@storybook/react";
import { AppContainer } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";
import { IntroGallery } from "./intro-gallery.tsx";

const meta = {
  title: "Organisms/Homepage/IntroGallery",
  component: IntroGallery,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=327-4859&t=GhlP2VAdQe4cmQbA-4"
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
} satisfies Meta<typeof IntroGallery>;

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
