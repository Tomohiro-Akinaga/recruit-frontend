import { describe, expect, test, vi, afterEach } from 'vitest'
import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  afterEach(() => {
    cleanup() // テスト後にDOMをクリアする
    vi.clearAllMocks() // モック関数をクリアする
  })

  test('Buttonをレンダーできる', () => {
    render(
      <Button icon='edit' color='primary' size='large'>
        Edit
      </Button>
    )
    expect(screen.getByRole('button')).toBeDefined()
  })

  test('Buttonがdisabledの場合クリックできない', async () => {
    const onClickMock = vi.fn(() => {})

    render(
      <Button icon='edit' color='primary' size='small' onClick={onClickMock} disabled>
        Edit
      </Button>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
