import React from 'react'
import { Theme } from './Theme'

export interface ThemeContextProps {
    value: Theme
    setTheme: (newTheme: Theme) => void
}

export const ThemeContext = React.createContext({} as ThemeContextProps)

export const ThemeStorage = {
    setTheme: (newTheme: Theme) => {
        localStorage.setItem('theme', newTheme)
    },
    getTheme: () => {
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', Theme.auto)
        }
        return localStorage.getItem('theme') as Theme
    },
}
