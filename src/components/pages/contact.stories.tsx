import { type Meta, type StoryObj } from "@storybook/react";
import { Footer, Header } from "#app/components/organisms";
import { ContactPage } from "./contact.tsx";
import { AppContainer, Main } from "#app/components/templates";
import {
  setViewport,
  setDesignPreview,
  disableA11yRules,
} from "#app/utils/storybook.ts";

const meta = {
  title: "Pages/Contact",
  component: AppContainer,
  parameters: {
    layout: "fullscreen",
    ...disableA11yRules(["color-contrast"]),
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=358-6344&t=gcpK216Y7T7J6kCJ-4"
    ),
  },
  args: {},
  argTypes: {},
  decorators: [
    () => (
      <AppContainer>
        <Header />
        <Main>
          <ContactPage />
        </Main>
        <Footer />
      </AppContainer>
    ),
  ],
} satisfies Meta<typeof ContactPage>;

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
