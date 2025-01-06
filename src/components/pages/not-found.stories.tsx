import { type Meta, type StoryObj } from "@storybook/react";
import { Footer, Header } from "#app/components/organisms";
import { NotFoundPage } from "./not-found.tsx";
import { AppContainer, Main } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";

const meta = {
  title: "Pages/NotFound",
  component: AppContainer,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=577-15700&t=fFd2wydMmhRnCQCN-4"
    ),
  },
  args: {},
  argTypes: {},
  decorators: [
    () => (
      <AppContainer>
        <Header />
        <Main>
          <NotFoundPage />
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
