import styles from './Camera.module.css'

export function Camera() {
  return (
    <div className={styles.app__cam}>
      <label>NAME</label>
      <div className={styles.cam__sound}></div>
    </div>
  )
}

export default Camera
