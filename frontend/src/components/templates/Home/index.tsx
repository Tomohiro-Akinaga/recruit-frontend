import React from 'react'
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
}

const HomeTemplate = ({ contents }: Props) => {
  return (
    <div className={styles.wrapper}>
      <SideBar contents={contents} />
      {/* <Content contents={contents} /> */}
      <Footer />
    </div>
  )
}

export default HomeTemplate
