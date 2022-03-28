import React from 'react'
import '../../../styles/App.module.css'

interface Props {
  name: string
}

export const Input: React.FC<Props> = (props) => {
  return (
    <div className="input">
      <label>{props.name}</label>
      <input></input>
    </div>
  )
}
