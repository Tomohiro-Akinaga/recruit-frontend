import type { Meta, StoryObj } from "@storybook/react";
import SideBar from "./index";

const meta = {
  title: "SideBar",
  component: SideBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary Comment */
export const Primary: Story = {
  args: {
    children: "children",
  },
};

/** Secondary Comment */
export const Secondary: Story = {
  args: {
    children: "children",
  },
};