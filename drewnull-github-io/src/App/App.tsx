import styles from './App.module.css'
import { Container } from '../Container/Container'
import { RichText } from '../RichText/RichText'

function App(props: any) {
  return (
    <div className={styles.App}>
      <header>
        <div>Drew Null</div>
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
}

export default App
