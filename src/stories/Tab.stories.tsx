import { colorsTypeArgs } from "@/types/colors";
import { Tab } from "@/ui/Tab";
import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import { TabCell } from "@/ui/Tab/Cell";

const meta = {
  title: "Tab",
  component: Tab,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <>
      <TabCell>Select</TabCell>
      <TabCell>Tab</TabCell>
      <TabCell active>Rating</TabCell>
      <TabCell>Modal</TabCell>
      <TabCell disabled>Radio</TabCell>
    </>
  }
}

