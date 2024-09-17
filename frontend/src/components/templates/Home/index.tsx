import React, { useState } from 'react'
import styles from './index.module.css'
import SideBar from '@/components/organisms/SideBar'
import Content from '@/components/organisms/Content'
import Footer from '@/components/organisms/Footer'

type ContentsType = {
  id: number
  title: string
  body: string
}[]

interface Props {
  contents: ContentsType
  contentId: number | undefined
  setContentId: (id: number | undefined) => void
}

const HomeTemplate = ({ contents, contentId, setContentId }: Props) => {
  return (
    <div className={styles.wrapper}>
      <SideBar contents={contents} setContentId={setContentId} />
      <Content contents={contents} contentId={contentId} />
      <Footer />
    </div>
  )
}

export default HomeTemplate
