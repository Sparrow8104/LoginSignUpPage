import React from 'react'
import './Button.css'
const Button=({onClick,type,children})=> {
    console.log('onclick type' ,typeof onClick)
  return (
    <button className="ui_button" onClick={onClick} type={type}>{children}</button>
  )
}

export default Button
