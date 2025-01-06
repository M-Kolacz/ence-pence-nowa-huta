import { type Meta, type StoryObj } from "@storybook/react";
import { AppContainer, Main } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";
import { NotFound } from "./not-found.tsx";

const meta = {
  title: "Organisms/NotFound",
  component: NotFound,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=577-8667&t=fFd2wydMmhRnCQCN-4"
    ),
  },
  decorators: [
    (Story) => (
      <AppContainer>
        <Main>
          <Story />
        </Main>
      </AppContainer>
    ),
  ],
} satisfies Meta<typeof NotFound>;

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
