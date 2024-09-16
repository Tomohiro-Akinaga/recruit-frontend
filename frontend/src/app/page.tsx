'use client'

import styles from './page.module.css'
import HomePage from '@/components/pages'
import React, { useReducer, createContext, useContext, ReactNode, Dispatch } from 'react'
import { CountContext } from '@/context/ContentProvider'

export default function Home() {
  const context = useContext(CountContext)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {context?.state.count}
        <HomePage />
      </main>
    </div>
  )
}
