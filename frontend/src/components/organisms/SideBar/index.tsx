'use client'

import React, { PropsWithChildren, useState, useMemo } from 'react'
import styles from './index.module.css'
import Button from '@/components/atoms/Button'

interface Props {}

const SideBar = ({ children }: PropsWithChildren<Props>) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const titles = ['こころ', '吾輩は猫である', '羅生門', '蜘蛛の糸', '走れメロス']

  const handleEdit = () => setIsEditing(!isEditing)

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
        {titles.map((v, i) => (
          <li key={i} className={styles.title}>
            {v}
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
