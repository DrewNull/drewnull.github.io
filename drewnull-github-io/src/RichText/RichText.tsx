import styles from './RichText.module.scss'

export interface RichTextProps {
    children: any
}

export function RichText(props: RichTextProps) {
    return (
        <>
            <div className={styles.RichText}>{props.children}</div>
        </>
    )
}
