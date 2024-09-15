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

/** Primaryボタン */
export const PrimaryButton: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'primary',
    icon: 'edit',
  },
}

/** Primary非活性ボタン */
export const PrimaryButtonDisabled: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'primary',
    icon: 'edit',
    disabled: true,
  },
}

/** Secondaryボタン */
export const SecondaryButton: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'secondary',
    icon: 'edit',
  },
}

/** Secondary非活性ボタン */
export const SecondaryButtonDisabled: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'secondary',
    icon: 'edit',
    disabled: true,
  },
}

/** Tertiaryボタン */
export const TertiaryButton: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'tertiary',
    icon: 'edit',
  },
}

/** Tertiary非活性ボタン */
export const TertiaryButtonDisabled: Story = {
  args: {
    children: 'Edit',
    size: 'large',
    color: 'tertiary',
    icon: 'edit',
    disabled: true,
  },
}
