'use client'

import React, { PropsWithChildren, useEffect, useState } from 'react'
import styles from './index.module.css'
import Button from '@/components/atoms/Button'
import { useContent } from '@/hooks/useContent'

type Content = {
  id: number
  title: string
  body: string
}

interface Props {
  contents: Content[]
  contentId: number | undefined
}

const Content = ({ children, contentId }: PropsWithChildren<Props>) => {
  const [isEditableTitle, setIsEditableTitle] = useState<boolean>(false)
  const [isEditableText, setIsEditableText] = useState<boolean>(false)

  const [content, setContent] = useState<Content>({ id: 0, title: '', body: '' })
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')

  const { state, dispatch } = useContent()

  useEffect(() => {
    const fetchContent = async () => {
      if (!contentId) return
      const response = await fetch(`/api/GET/${contentId}`)
      const data = await response.json()
      setContent(data.data)
      setTitle(data.data.title)
      setText(data.data.body)
    }
    fetchContent()
  }, [contentId])

  const handleEditTitle = () => setIsEditableTitle(!isEditableTitle)
  const handleEditText = () => setIsEditableText(!isEditableText)

  const handleCancelTitle = () => {
    setIsEditableTitle(false)
    setTitle(content.title)
  }

  const handleCancelText = () => {
    setIsEditableText(false)
    setText(content.body)
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)

  const handleSaveTitle = async () => {
    const response = await fetch('/api/PUT', {
      method: 'PUT',
      body: JSON.stringify({ id: contentId, title: title, body: content?.body }),
    })
    const data = await response.json()
    dispatch({ type: 'UPDATE_TITLE', payload: data.data })
    setIsEditableTitle(false)
  }

  const handleSaveText = async () => {
    const response = await fetch('/api/PUT', {
      method: 'PUT',
      body: JSON.stringify({ id: contentId, title: content?.title, body: text }),
    })
    const data = await response.json()
    dispatch({ type: 'UPDATE_BODY', payload: data.data })
    setIsEditableText(false)
  }

  const EditTitleButton = () => {
    if (!isEditableTitle)
      return (
        <Button size='large' icon='edit' color='primary' onClick={handleEditTitle}>
          Edit
        </Button>
      )
    return (
      <div className={styles.editButtonArea}>
        <Button size='small' icon='cancel' color='tertiary' onClick={handleCancelTitle}>
          Cancel
        </Button>
        <Button size='small' icon='save' color='primary' onClick={handleSaveTitle}>
          Save
        </Button>
      </div>
    )
  }

  const EditTextButtpn = () => {
    if (!isEditableText)
      return (
        <Button size='large' icon='edit' color='primary' onClick={handleEditText}>
          Edit
        </Button>
      )
    return (
      <div className={styles.editButtonArea}>
        <Button size='small' icon='cancel' color='tertiary' onClick={handleCancelText}>
          Cancel
        </Button>
        <Button size='small' icon='save' color='primary' onClick={handleSaveText}>
          Save
        </Button>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.titleArea}>
          <input
            type='text'
            value={title}
            onChange={handleChangeTitle}
            className={styles.title}
            readOnly={!isEditableTitle}
          />
          <EditTitleButton />
        </div>
        <div className={styles.textArea}>
          <textarea value={text} onChange={handleChangeText} className={styles.text} readOnly={!isEditableText} />
          <EditTextButtpn />
        </div>
      </div>
    </div>
  )
}

export default Content
