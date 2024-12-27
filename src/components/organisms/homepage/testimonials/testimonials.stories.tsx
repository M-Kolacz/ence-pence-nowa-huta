import { type Meta, type StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/test";
import { AppContainer, Main } from "#app/components/templates";
import { setViewport, setDesignPreview } from "#app/utils/storybook.ts";
import { testimonials } from "./testimonials.helpers.ts";
import { Testimonials } from "./testimonials.tsx";

const meta = {
  title: "Organisms/Homepage/Testimonials",
  component: Testimonials,
  parameters: {
    layout: "fullscreen",
    ...setDesignPreview(
      "https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=261-4716&t=GhlP2VAdQe4cmQbA-4"
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
} satisfies Meta<typeof Testimonials>;

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

export const NavigateThroughTestimonials: Story = {
  name: "Navigate through testimonials",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const testimonialButtons = await canvas.findAllByRole("button", {
      name: /Wyświetl opinie numer.*/,
    });
    await canvas.findByText(testimonials[0].description);

    await userEvent.click(testimonialButtons[1] as Element);
    await canvas.findByText(testimonials[1].description);

    const nextButton = await canvas.findByRole("button", {
      name: "Następna opinia",
    });
    await userEvent.click(nextButton);
    await canvas.findByText(testimonials[2].description);

    const prevButton = await canvas.findByRole("button", {
      name: "Poprzednia opinia",
    });
    await userEvent.click(prevButton);
    await canvas.findByText(testimonials[1].description);
  },
};
