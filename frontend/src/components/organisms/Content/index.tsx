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
  contentId: number
}

const Content = ({ children, contents, contentId }: PropsWithChildren<Props>) => {
  const [isEditable, setIsEditable] = useState<boolean>(false)

  const { state, dispatch } = useContent()

  const content = state.contents.find((v: any) => v.id === contentId)

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
