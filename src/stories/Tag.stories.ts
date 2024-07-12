import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@/ui/Tag";
import "@/styles/index.scss"
import { colorsTypeArgs } from "@/types/colors";

const meta = {
  title: "Tag",
  component: Tag,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Tag"
  }
}
