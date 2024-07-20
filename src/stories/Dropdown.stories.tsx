import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { Dropdown } from "@/ui/Dropdown";
import { DropdownOption } from "@/ui/Dropdown/Option";
import { DropdownLine } from "@/ui/Dropdown/Line";
import { colorsTypeArgs } from "@/types/colors";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Dropdown button",
    children: <>
      <DropdownOption text="option 1" />
      <DropdownOption checkbox text="option 2" />
      <DropdownOption text="option 3" />
      <DropdownLine />
      <DropdownOption text="option 4" />
    </>
  }
}

