'use client'

import React, { PropsWithChildren, useState, useMemo, useEffect, useReducer, useContext } from 'react'
import styles from './index.module.css'
import Button from '@/components/atoms/Button'
import IconButton from '@/components/atoms/IconButton'
import Link from 'next/link'
import { reducer } from '@/components/pages'
import { CountContext } from '@/context/ContentProvider'

type ContentType = {
  id: number
  title: string
  body: string
}

interface Props {
  contents: ContentType[]
}

function useCount() {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

const SideBar = ({ children, contents }: PropsWithChildren<Props>) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleCreate = async () => await fetch('/api/POST', { method: 'POST' })

  const handleEdit = () => setIsEditing(!isEditing)

  const handleDelete = async (id: number) => {
    await fetch('/api/DELETE', { method: 'DELETE', body: JSON.stringify({ id }) })
    const response = await fetch('/api/GET')
    const data = await response.json()
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

  const { state, dispatch } = useCount()
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.serviceLogo}>ServiceName</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>;
      <ul className={styles.titleList}>
        {contents.map((v: any) => (
          <li key={v.id} className={styles.title}>
            <Link href={`/${v.id}`} style={{ width: '100%' }}>
              {v.title}
            </Link>
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
