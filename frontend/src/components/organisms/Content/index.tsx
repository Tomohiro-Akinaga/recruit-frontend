'use client'

import React, { PropsWithChildren, useEffect, useState } from 'react'
import styles from './index.module.css'
import Button from '@/components/atoms/Button'

interface Props {}

type Content = {
  id: string
  title: string
  body: string
}

const Content = ({ children }: PropsWithChildren<Props>) => {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [content, setContent] = useState<Content | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('http://localhost:8080/content/1')
      const data = await response.json()
      setContent(data)
    }
    fetchContent()
  }, [])

  const handleEdit = () => setIsEditable(!isEditable)

  const TitleContainer = () => {
    return (
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{content?.title}</h1>
        <Button size='large' icon='edit' color='primary'>
          Edit
        </Button>
      </div>
    )
  }

  const TextContainer = () => {
    return (
      <div className={styles.textContainer}>
        <p className={styles.text}>{content?.body || ''}</p>
        <Button size='large' icon='edit' color='primary'>
          Edit
        </Button>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <TitleContainer />
        <TextContainer />
      </div>
    </div>
  )
}

export default Content
