import type { Meta, StoryObj } from "@storybook/react";
import Content from "./index";

const meta = {
  title: "Content",
  component: Content,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Content>;

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