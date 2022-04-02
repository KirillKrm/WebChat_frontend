import styles from '../styles/main.module.css'
import { Button, Camera, Input } from 'components'

function Main() {
  return (
    <div className={styles.app}>
      <main className={styles.app__profileData}>
        <a href="conv">
          <button style={{ position: 'absolute' }}>Go Conv</button>
        </a>
        <Camera />
        <article className={styles.app__buttons}>
          <Button name="M" />
          <Button name="C" />
        </article>
        <Input name="Name:" />
        <article className={styles.app__panels}>
          <section className={styles.panels__connect}>
            <form className={styles.connect__form}>
              <p>Connect to room</p>
              <Input name="Room ID:" />
              <button type="submit" onClick={() => alert('Connect')}>
                Connect
              </button>
            </form>
          </section>
          <form className={styles.panels__create}>
            <p>Create room</p>
            <button type="submit" onClick={() => alert('Create')}>
              Create
            </button>
          </form>
        </article>
      </main>
    </div>
  )
}

export default Main
