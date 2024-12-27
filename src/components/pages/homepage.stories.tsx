import { type Meta, type StoryObj } from "@storybook/react";
import { Footer, Header } from "#app/components/organisms";
import { Homepage } from "./homepage.tsx";
import { AppContainer, Main } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";

const meta = {
  title: "Pages/Homepage",
  component: AppContainer,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=100-225&t=fp53uoEO5s9CIEdr-4"
    ),
  },
  args: {},
  argTypes: {},
  decorators: [
    () => (
      <AppContainer>
        <Header />
        <Main>
          <Homepage />
        </Main>
        <Footer />
      </AppContainer>
    ),
  ],
} satisfies Meta<typeof AppContainer>;

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
