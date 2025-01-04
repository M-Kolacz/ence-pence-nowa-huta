import { type Meta, type StoryObj } from "@storybook/react";
import { setDesignPreview, disableControls } from "#app/utils/storybook.ts";
import { ListItem } from "./list-item.tsx";
import { Icon, Link } from "#app/components/atoms";

const meta = {
  title: "Atoms/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
    ...setDesignPreview(
      "https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=501-2441&m=dev"
    ),
  },
  decorators: [(Story) => <ul className="flex flex-col gap-2">{<Story />}</ul>],
  args: {
    icon: <Icon size="large" name="breakfast" />,
    children: "śniadanie 2,00 zł",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const Variants: Story = {
  render: (args) => {
    return (
      <>
        <ListItem {...args} icon={<Icon size="large" name="breakfast" />}>
          śniadanie 2,00 zł
        </ListItem>
        <ListItem {...args} icon={<Icon size="large" name="folder" />}>
          <Link href="/">Karta zgłoszenia dziecka</Link>
        </ListItem>
      </>
    );
  },
  argTypes: {
    ...disableControls<typeof ListItem>(["children", "icon"]),
  },
};
