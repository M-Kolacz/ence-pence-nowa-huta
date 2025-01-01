import { type Meta, type StoryObj } from "@storybook/react";
import { AppContainer, Main } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";
import { Map } from "./map.tsx";

const meta = {
  title: "Organisms/Contact/Map",
  component: Map,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=363-13329&t=rzMrygzjQ2VUp5UF-4"
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
} satisfies Meta<typeof Map>;

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
