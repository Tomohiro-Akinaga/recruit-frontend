import React, { PropsWithChildren } from 'react'
import styles from './index.module.css'

interface Props {}

const Footer = ({ children }: PropsWithChildren<Props>) => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; 2021 Sample</p>
      <p>運営会社</p>
    </footer>
  )
}

export default Footer
