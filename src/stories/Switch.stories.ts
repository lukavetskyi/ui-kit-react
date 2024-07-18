import { colorsTypeArgs } from "@/types/colors";
import { Switch } from "@/ui/Switch";
import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"

const meta = {
  title: "Switch",
  component: Switch,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}
