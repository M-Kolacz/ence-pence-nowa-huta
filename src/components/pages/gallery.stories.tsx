import { type Meta, type StoryObj } from "@storybook/react";
import { Footer, Header } from "#app/components/organisms";
import { AppContainer, Main } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";
import { GalleryPage } from "./gallery.tsx";

const meta = {
  title: "Pages/Gallery",
  component: GalleryPage,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=338-6029&t=GhlP2VAdQe4cmQbA-4"
    ),
  },
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <AppContainer>
        <Header />
        <Main>
          <Story />
        </Main>
        <Footer />
      </AppContainer>
    ),
  ],
} satisfies Meta<typeof GalleryPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  name: "Mobile",
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
