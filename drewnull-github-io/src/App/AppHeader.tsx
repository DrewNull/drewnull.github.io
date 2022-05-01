import styles from './AppHeader.module.scss'
import { Container } from '../Container/Container'
import { ThemeControl } from '../Theme/ThemeControl'

export function AppHeader(props: AppHeaderProps) {
    return (
        <header>
            <Container>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <div className={styles.logoTextBig}>Drew Null</div>
                        <div className={styles.logoTextSmall}>
                            Web and Commerce Software Engineer in Chicago, IL
                        </div>
                    </div>
                    <ThemeControl />
                </div>
            </Container>
        </header>
    )
}

export interface AppHeaderProps {}
