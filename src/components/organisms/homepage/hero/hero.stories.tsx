import { type Meta, type StoryObj } from "@storybook/react";
import { AppContainer, Main } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";
import { Hero } from "./hero.tsx";

const meta = {
  title: "Organisms/Homepage/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=237-1388&t=GQLL9YfZgeWcKaym-4"
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
} satisfies Meta<typeof Hero>;

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
