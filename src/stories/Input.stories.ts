import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { Input } from "@/ui/Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    helperText: "Helper text input",
    placeholder: "Placeholder",
    correctInput: (s) => s.length > 8,
  }
}

