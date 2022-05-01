import { useContext } from 'react'
import { Theme } from './Theme'
import styles from './ThemeButton.module.scss'
import { ThemeContext } from './ThemeContext'
import { classNames } from '../classNames'

export function ThemeButton(props: ThemeButtonProps) {
    const themeContext = useContext(ThemeContext)
    return (
        <button
            className={classNames([
                styles.ThemeButton,
                props.theme === themeContext.value
                    ? styles.ThemeButton_active
                    : styles.ThemeButton_inactive,
            ])}
            onClick={() => themeContext.setTheme(props.theme)}
        >
            {props.children}
        </button>
    )
}

export interface ThemeButtonProps {
    children: any
    theme: Theme
}
