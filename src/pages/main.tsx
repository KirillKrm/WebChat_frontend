import styles from '../styles/main.module.css'
import Button from '../components/Button'
import Camera from '../components/Camera'
import Input from '../components/Input'

function Main() {
  return (
    <div className={styles.app}>
      <Camera />
      <div className={styles.app__buttons}>
        <Button name="M" />
        <Button name="C" />
      </div>
      <Input name="Name:" />
      <div className={styles.app__panels}>
        <div className={styles.panels__connect}>
          <form className={styles.connect__form}>
            <p>Connect to room</p>
            <Input name="Room ID:" />
            <button type="submit" onClick={() => alert('Connect')}>
              Connect
            </button>
          </form>
        </div>
        <div className={styles.panels__create}>
          <p>Create room</p>
          <button onClick={() => alert('Create')}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default Main
