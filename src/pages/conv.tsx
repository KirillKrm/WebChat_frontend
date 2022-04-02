import styles from 'styles/conv.module.css'
import { Button, Camera, Input } from 'components'
import Script from 'next/script'
import { useEffect, useState } from 'react'

function Conv() {
  const [randomID, setID] = useState(Math.floor(Math.random() * 1000000))
  return (
    <div className={styles.app}>
      <a href="main">
        <button style={{ position: 'absolute' }}>Go Main</button>
      </a>
      <div className={styles.app__wrapper}>
        <main className={styles.wrapper__main}>
          <article className={styles.main__cameras}>cameras</article>
          <article className={styles.main__rightColumn}>
            <section className={styles.rightColumn__users}>users</section>
            <section className={styles.rightColumn__chat}>chat</section>
          </article>
        </main>
        <footer className={styles.wrapper__footer}>
          <section className={styles.footer__roomID}>
            <p>Room ID: </p>
          </section>
          <section className={styles.footer__buttons}>
            <Button name="M" />
            <Button name="C" />
            <Button name="X" />
          </section>
          <section className={styles.footer__time}>
            <p>Time:</p>
          </section>
        </footer>
      </div>
    </div>
  )
}

export default Conv
