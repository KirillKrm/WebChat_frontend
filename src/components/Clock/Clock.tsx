import styles from './Clock.module.css'
import { useEffect, useState } from 'react'

export function Clock() {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <>{value.toTimeString().split(' ')[0]}</>
}

export default Clock
