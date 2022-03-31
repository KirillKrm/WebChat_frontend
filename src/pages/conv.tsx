import styles from '../styles/conv.module.css'
import { Button, Camera, Input } from 'components'

function Conv() {
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <div className={styles.wrapper__content}>
          <div className={styles.content__cameras}>cameras</div>
          <div className={styles.content__rightColumn}>
            <div className={styles.rightColumn__users}>users</div>
            <div className={styles.rightColumn__chat}>chat</div>
          </div>
        </div>
        <div className={styles.wrapper__footer}>
          <div className={styles.footer__roomID}>
            <p>Room ID:</p>
          </div>
          <div className={styles.footer__buttons}>
            <Button name="M" />
            <Button name="C" />
            <Button name="X" />
          </div>
          <div className={styles.footer__time}>
            <p>Time:</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conv
