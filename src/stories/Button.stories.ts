import { Button } from "@/ui/Button";
import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button"
  }
}
