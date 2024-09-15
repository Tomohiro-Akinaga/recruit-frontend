import React, { PropsWithChildren } from 'react'
import styles from './index.module.css'

interface Props {}

const Content = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>記事</div>
    </div>
  )
}

export default Content
