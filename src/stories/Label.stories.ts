import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { Label } from "@/ui/Label";

const meta = {
  title: "Label",
  component: Label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Label"
  }
}
