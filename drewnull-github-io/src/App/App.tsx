import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { classNames } from '../classNames'
import { RichText } from '../RichText/RichText'
import { Theme } from '../Theme/Theme'
import { ThemeControl } from '../Theme/ThemeControl'
import {
    ThemeContext,
    ThemeContextProps,
    ThemeStorage,
} from '../Theme/ThemeContext'

export function App(props: AppProps) {
    const [themeState, setThemeState] = useState<ThemeContextProps>({
        value: ThemeStorage.getTheme(),
        setTheme: function setTheme(newTheme: Theme) {
            ThemeStorage.setTheme(newTheme)
            setThemeState({
                value: newTheme,
                setTheme: setTheme,
            })
        },
    })
    useEffect(() => {
        const themeInvertClassName = 'theme-invert'
        switch (themeState.value) {
            case Theme.auto:
                document.documentElement.classList.remove(themeInvertClassName)
                break
            case Theme.light:
                if (
                    window.matchMedia('(prefers-color-scheme: light)').matches
                ) {
                    document.documentElement.classList.remove(
                        themeInvertClassName
                    )
                } else {
                    document.documentElement.classList.add(themeInvertClassName)
                }
                break
            case Theme.dark:
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.remove(
                        themeInvertClassName
                    )
                } else {
                    document.documentElement.classList.add(themeInvertClassName)
                }
                break
        }
    }, [themeState])
    return (
        <ThemeContext.Provider value={themeState}>
            <div className={classNames([styles.App])}>
                <main className={styles.main}>
                    <RichText>
                        <p>
                            <strong>Hello!</strong>
                        </p>
                        <p>
                            This space is just a sandbox for web experiments and
                            prototypes.
                        </p>
                        <p>If you would like to get in touch&mdash;</p>
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
                                Code with me on{' '}
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
                        <p>
                            Thanks for visiting{' '}
                            <span
                                style={{
                                    display: 'inline-block',
                                    lineHeight: '1em',
                                    margin: '0 0.5em',
                                    transform: 'rotateZ(90deg)',
                                }}
                            >
                                :)
                            </span>
                        </p>
                    </RichText>
                    <hr />
                    <ThemeControl />
                </main>
            </div>
        </ThemeContext.Provider>
    )
}

export interface AppProps {}
