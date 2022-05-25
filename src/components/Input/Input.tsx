import { useState } from 'react'
import styles from './Input.module.css'

export function Input({
  name,
  handleInput,
}: {
  name: string
  handleInput: any
}) {
  return (
    <div className={styles.input}>
      <label>{name}</label>
      <input
        type="text"
        onChange={(event) => {
          handleInput(event.target.value)
        }}
      ></input>
    </div>
  )
}

export default Input
