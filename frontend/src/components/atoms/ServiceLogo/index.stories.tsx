import type { Meta, StoryObj } from "@storybook/react";
import ServiceLogo from "./index";

const meta = {
  title: "ServiceLogo",
  component: ServiceLogo,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ServiceLogo>;

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