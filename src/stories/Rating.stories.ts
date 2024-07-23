import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { Rating } from "@/ui/Rating";

const meta = {
  title: "Rating",
  component: Rating,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    selectedStars:3
  }
}


