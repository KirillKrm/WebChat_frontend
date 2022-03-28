import React from 'react'
import styles from './button.module.css'

interface Props {
  name: string
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button className={styles.btn} onClick={() => alert(props.name)}>
      {props.name}
    </button>
  )
}
