import { colorsTypeArgs } from "@/types/colors";
import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { Radio } from "@/ui/Radio";

const meta = {
  title: "Radio",
  component: Radio,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}

