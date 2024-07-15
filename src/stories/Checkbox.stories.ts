import { colorsTypeArgs } from "@/types/colors";
import { Checkbox } from "@/ui/Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"

const meta = {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}
