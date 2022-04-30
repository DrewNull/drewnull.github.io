import styles from './Container.module.scss'

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
