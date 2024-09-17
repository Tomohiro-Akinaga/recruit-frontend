import { describe, expect, test, vi, afterEach } from 'vitest'
import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import IconButton from './index'

describe('Button', () => {
  afterEach(() => {
    cleanup() // テスト後にDOMをクリアする
    vi.clearAllMocks() // モック関数をクリアする
  })

  test('Buttonをレンダーできる', () => {
    render(<IconButton icon='delete'></IconButton>)
    expect(screen.getByRole('button')).toBeDefined()
  })

  test('Buttonがdisabledの場合クリックできない', async () => {
    const onClickMock = vi.fn(() => {})

    render(<IconButton icon='delete' onClick={onClickMock} disabled></IconButton>)

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
