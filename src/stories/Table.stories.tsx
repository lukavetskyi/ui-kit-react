import { colorsTypeArgs } from "@/types/colors";
import { Table } from "@/ui/Table";
import { Meta, StoryObj } from "@storybook/react";
import "@/styles/index.scss"
import {Tag} from "@/ui/Tag"
import { Checkbox } from "@/ui/Checkbox";

const meta = {
  title: "Table",
  component: Table,
  argTypes: {
    color: {
      options: colorsTypeArgs
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <>
      <thead>
      <tr>
        <th><Checkbox/></th>
        <th>Header text</th>
        <th>y/n</th>
        <th>Social</th>
        <th>Date</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><Checkbox/></td>
        <td>Jacob Jones</td>
        <td><Tag color="success">Tag</Tag></td>
        <td><a href="#">tg</a></td>
        <td>5/27/15</td>
      </tr>
      <tr>
        <td><Checkbox checked/></td>
        <td>Darrell Steward</td>
        <td><Tag color="danger">Tag</Tag></td>
        <td><a href="#">fb</a></td>
        <td>5/7/16</td>
      </tr>
      <tr>
        <td><Checkbox/></td>
        <td>Arlene McCoy</td>
        <td><Tag color="success">Tag</Tag></td>
        <td><a href="#">fb</a></td>
        <td>4/4/18</td>
      </tr>
      <tr>
        <td><Checkbox/></td>
        <td>Jerome Bell</td>
        <td><Tag color="success">Tag</Tag></td>
        <td><a href="#">fb</a></td>
        <td>5/27/15</td>
      </tr>
      </tbody>
    </>
  }
}

