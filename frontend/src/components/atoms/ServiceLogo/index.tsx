import React, { PropsWithChildren } from 'react'
import styles from './index.module.css'
import Link from 'next/link'

interface Props {}

const ServiceLogo = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Link href='/' className={styles.link}>
      {children}
    </Link>
  )
}

export default ServiceLogo
