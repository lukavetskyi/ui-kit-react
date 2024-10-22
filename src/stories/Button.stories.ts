import { Button } from "@/ui/Button";
import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { colorsTypeArgs } from "@/types/colors";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
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
