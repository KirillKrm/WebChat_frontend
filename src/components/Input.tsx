import styles from './Input.module.css'

export function Input({ name }: { name: string }) {
  return (
    <div className={styles.input}>
      <label>{name}</label>
      <input></input>
    </div>
  )
}

export default Input
