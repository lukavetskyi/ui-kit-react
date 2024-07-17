import { colorsTypeArgs } from "@/types/colors";
import { Meta, StoryObj } from "@storybook/react";
import { Notification } from "@/ui/Notification";
import "@/styles/index.scss"

const meta = {
  title: "Notification",
  component: Notification,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Modal Window",
    children: "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
  }
}
