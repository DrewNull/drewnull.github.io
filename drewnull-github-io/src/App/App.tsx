import { useState } from 'react'
import styles from './App.module.scss'
import { classNames } from '../classNames'
import { Container } from '../Container/Container'
import { RichText } from '../RichText/RichText'

enum Theme {
  auto,
  light,
  dark,
}

export function App(props: any) {
  const [theme, setTheme] = useState(Theme.auto)
  return (
    <div
      className={classNames([
        styles.App,
        theme === Theme.light ? styles.App_light : undefined,
        theme === Theme.dark ? styles.App_dark : undefined,
      ])}
    >
      <header>
        <Container>
          <div>Drew Null</div>
          <div>
            <span>Theme:</span>
            <ThemeButton theme={Theme.auto}>Auto</ThemeButton>
            <ThemeButton theme={Theme.light}>Light</ThemeButton>
            <ThemeButton theme={Theme.dark}>Dark</ThemeButton>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <RichText>
            <h1>Hello World!</h1>
          </RichText>
        </Container>
      </main>
    </div>
  )

  interface ThemeButtonProps {
    children: any
    theme: Theme
  }

  function ThemeButton(props: ThemeButtonProps) {
    return (
      <button
        className={classNames([
          styles.ThemeButton,
          props.theme === theme
            ? styles.ThemeButton_active
            : styles.ThemeButton_inactive,
        ])}
        onClick={() => setTheme(props.theme)}
      >
        {props.children}
      </button>
    )
  }
}
