import { Theme } from './Theme'
import { ThemeButton } from './ThemeButton'
import styles from './ThemeControl.module.scss'

export interface ThemeControlProps {}

export function ThemeControl(props: ThemeControlProps) {
    return (
        <>
            <div className={styles.ThemeControl}>
                <span className={styles.label}>Theme</span>
                <div>
                    <ThemeButton theme={Theme.auto}>Auto</ThemeButton>
                    <ThemeButton theme={Theme.light}>Light</ThemeButton>
                    <ThemeButton theme={Theme.dark}>Dark</ThemeButton>
                </div>
            </div>
        </>
    )
}
