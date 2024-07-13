import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { Accordion } from "@/ui/Accordion";

const meta = {
  title: "Accordion",
  component: Accordion,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Accordion title",
    children: "Wise men speak because they have something to say; fools because they have to say something.",
  }
}
