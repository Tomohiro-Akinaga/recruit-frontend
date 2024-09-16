'use client'

import React, { PropsWithChildren, useState, useMemo, useEffect } from 'react'
import styles from './index.module.css'
import Button from '@/components/atoms/Button'
import IconButton from '@/components/atoms/IconButton'

interface Props {}

type Contents = {
  id: string
  title: string
  body: string
}

const SideBar = ({ children }: PropsWithChildren<Props>) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [contents, setContents] = useState<Contents[]>([])

  useEffect(() => {
    const fetchTitles = async () => {
      const response = await fetch('http://localhost:8080/content')
      const data = await response.json()
      setContents(data)
    }
    fetchTitles()
  }, [])

  const handleEdit = () => setIsEditing(!isEditing)

  const handleDelete = () => {}

  const CreateButton = () => {
    if (!isEditing) return
    return (
      <Button size='large' color='secondary' icon='create'>
        New Page
      </Button>
    )
  }

  const EditButton = () => {
    const icon = isEditing ? 'done' : 'edit'
    const children = isEditing ? 'Done' : 'Edit'

    return (
      <Button size='large' color='primary' icon={icon} onClick={handleEdit}>
        {children}
      </Button>
    )
  }

  const buttonAreaClassNames = useMemo(() => {
    if (isEditing) return [styles.buttonArea, styles['is-Editting']].join(' ')
    return [styles.buttonArea].join(' ')
  }, [isEditing])

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.serviceLogo}>ServiceName</h3>
      <ul className={styles.titleList}>
        {contents.map((v) => (
          <li key={v.id} className={styles.title}>
            {v.title}
            {isEditing && <IconButton icon='delete' onClick={handleDelete} />}
          </li>
        ))}
      </ul>
      <div className={buttonAreaClassNames}>
        <CreateButton />
        <EditButton />
      </div>
    </div>
  )
}

export default SideBar
