import styles from './Button.module.css'

export function Button({ name }: { name: string }) {
  return (
    <button className={styles.btn} onClick={() => alert(name)}>
      {name}
    </button>
  )
}

export default Button
