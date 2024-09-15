import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

const meta = {
  title: 'Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Primaryカラーボタン */
export const PrimaryButton: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'primary',
    icon: 'edit',
  },
}

/** Secondaryカラーボタン */
export const SecondaryButton: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'secondary',
    icon: 'edit',
  },
}

/** Tertiaryカラーボタン */
export const TertiaryButton: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'tertiary',
    icon: 'edit',
  },
}
