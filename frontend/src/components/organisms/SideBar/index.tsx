'use client'

import React, { PropsWithChildren, useState, useMemo, useEffect, useReducer, useContext } from 'react'
import styles from './index.module.css'
import Button from '@/components/atoms/Button'
import IconButton from '@/components/atoms/IconButton'
import { useContent } from '@/hooks/useContent'

type ContentType = {
  id: number
  title: string
  body: string
}

interface Props {
  contents: ContentType[]
  setContentId: (id: number) => void
}

const SideBar = ({ children, setContentId }: PropsWithChildren<Props>) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const { state, dispatch } = useContent()

  const handleCreate = async () => {
    const res = await fetch('/api/POST', { method: 'POST' })
    const data = await res.json()
    dispatch({ type: 'CREATE', payload: data.data })
  }

  const handleEdit = () => setIsEditing(!isEditing)

  const handleDelete = async (id: number) => {
    await fetch('/api/DELETE', { method: 'DELETE', body: JSON.stringify({ id }) })
    dispatch({ type: 'DELETE', payload: id })
  }

  const CreateButton = () => {
    if (!isEditing) return
    return (
      <Button size='large' color='secondary' icon='create' onClick={handleCreate}>
        New Page
      </Button>
    )
  }

  const EditButton = () => {
    const icon = isEditing ? 'done' : 'edit'
    const color = isEditing ? 'secondary' : 'primary'
    const children = isEditing ? 'Done' : 'Edit'

    return (
      <Button size='large' color={color} icon={icon} onClick={handleEdit}>
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
        {state.contents.map((v: any) => (
          <li key={v.id} className={styles.title} onClick={() => setContentId(v.id)}>
            {v.title}
            {isEditing && <IconButton icon='delete' onClick={() => handleDelete(v.id)} />}
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
