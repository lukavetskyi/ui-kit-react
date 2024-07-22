import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { Select } from "@/ui/Select";
import { SelectOption } from "@/ui/Select/Option";
import { colorsTypeArgs } from "@/types/colors";

const meta = {
  title: "Select",
  component: Select,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <>
      <SelectOption>first</SelectOption>
      <SelectOption>second</SelectOption>
      <SelectOption>third</SelectOption>
      <SelectOption>fourth</SelectOption>
    </>
  }
}


