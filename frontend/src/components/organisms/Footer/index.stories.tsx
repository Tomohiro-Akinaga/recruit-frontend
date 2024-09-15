import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./index";

const meta = {
  title: "Footer",
  component: Footer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

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