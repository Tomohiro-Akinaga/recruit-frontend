import type { Meta, StoryObj } from '@storybook/react'
import IconButton from './index'

const meta = {
  title: 'IconButton',
  component: IconButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

/** Primaryボタン */
export const PrimaryButton: Story = {
  args: {
    icon: 'delete',
    onClick: () => {},
    disabled: false,
  },
}

/** Primary非活性ボタン */
export const PrimaryButtonDisabled: Story = {
  args: {
    icon: 'delete',
    onClick: () => {},
    disabled: true,
  },
}
