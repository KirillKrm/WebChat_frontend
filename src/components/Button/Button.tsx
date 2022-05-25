import styles from './Button.module.css'

type propTypes = {
  children?: any
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
}

export function Button(Props: propTypes) {
  const { children = '', onClick = () => {}, className = styles.btn } = Props
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
