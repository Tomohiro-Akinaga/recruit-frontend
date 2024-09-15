import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import styles from './index.module.css'

interface Props extends ComponentPropsWithoutRef<'button'> {
  size: 'small' | 'large'
  color: 'primary' | 'secondary' | 'tertiary'
  icon: 'create' | 'edit' | 'cancel' | 'save' | 'done'
}

const Button = ({ children, size, color, icon, onClick }: PropsWithChildren<Props>) => {
  const classNames = [
    styles.button,
    styles['has-icon'],
    styles[`is-${size}`],
    styles[`is-${color}`],
    styles[`is-${icon}`],
  ].join(' ')

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
