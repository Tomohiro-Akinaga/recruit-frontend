import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import styles from './index.module.css'

interface Props extends ComponentPropsWithoutRef<'button'> {
  icon: 'delete'
}

const IconButton = ({ children, icon, onClick, disabled }: PropsWithChildren<Props>) => {
  const classNames = [styles.button, styles['has-icon'], styles[`is-${icon}`]].join(' ')
  return <button className={classNames} disabled={disabled}></button>
}

export default IconButton
