import React from 'react'
import styles from './index.module.css'
import SideBar from '@/components/organisms/SideBar'
import Content from '@/components/organisms/Content'
import Footer from '@/components/organisms/Footer'

const HomeTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <Content />
      <Footer />
    </div>
  )
}

export default HomeTemplate
