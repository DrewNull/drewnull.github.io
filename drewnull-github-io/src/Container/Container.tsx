import React from 'react'
import styles from './Container.module.css'

export interface ContainerProps {
  children: any
}

export function Container(props: ContainerProps) {
  return (
    <>
      <div className={styles.Container}>{props.children}</div>
    </>
  )
}
