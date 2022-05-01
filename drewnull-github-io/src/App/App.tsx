import { useState } from 'react'
import styles from './App.module.scss'
import { AppHeader } from './AppHeader'
import { classNames } from '../classNames'
import { Container } from '../Container/Container'
import { RichText } from '../RichText/RichText'
import { Theme } from '../Theme/Theme'
import {
    ThemeContext,
    ThemeContextProps,
    ThemeStorage,
} from '../Theme/ThemeContext'

export function App(props: AppProps) {
    const [themeState, setThemeState] = useState<ThemeContextProps>({
        value: ThemeStorage.getTheme(),
        setTheme: setTheme,
    })
    return (
        <ThemeContext.Provider value={themeState}>
            <div className={classNames([styles.App, ...getThemeClassNames()])}>
                <AppHeader />
                <main className={styles.main}>
                    <Container>
                        <RichText>
                            <h1>Hello!</h1>
                            <p>
                                This site is a sandbox for web experiments and
                                proof-of-concepts. If you would like to get in
                                touch&mdash;
                            </p>
                            <ul>
                                <li>
                                    Connect with me on{' '}
                                    <a
                                        href='https://www.linkedin.com/in/drewnull'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    Code with me at{' '}
                                    <a
                                        href='https://github.com/drewnull'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    Read my occasional post at the{' '}
                                    <a
                                        href='https://world.optimizely.com/blogs/drew-null'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                    >
                                        Optimizely Developer Community Blog
                                    </a>
                                </li>
                                <li>
                                    Visit my wife's website:{' '}
                                    <a
                                        href='https://www.lipengchen.com'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                    >
                                        Lipeng Chen Music
                                    </a>
                                </li>
                            </ul>
                            <br />
                            <p>Thanks for visiting 😎</p>
                        </RichText>
                    </Container>
                </main>
            </div>
        </ThemeContext.Provider>
    )
    function getThemeClassNames() {
        return [
            themeState.value === Theme.light ? styles.App_light : undefined,
            themeState.value === Theme.dark ? styles.App_dark : undefined,
        ]
    }
    function setTheme(newTheme: Theme) {
        ThemeStorage.setTheme(newTheme)
        setThemeState({
            value: newTheme,
            setTheme: setTheme,
        })
    }
}

export interface AppProps {}
