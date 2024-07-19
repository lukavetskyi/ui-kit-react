import { colorsTypeArgs } from "@/types/colors";
import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { Textarea } from "@/ui/Textarea";

const meta = {
  title: "Textarea",
  component: Textarea,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Placeholder"
  }
}

export const HelpTextAndSymbols: Story = {
  args: {
    placeholder: "Placeholder",
    helperText: "Helper text",
    maxLength: 100,
  }
}


