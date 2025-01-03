import { type Meta, type StoryObj } from "@storybook/react";
import { AppContainer, Main } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";
import { ContactForm } from "./contact-form.tsx";

const meta = {
  title: "Organisms/Contact/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=389-6075&t=3GHU1CB83W6Edr2g-4"
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
} satisfies Meta<typeof ContactForm>;

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
