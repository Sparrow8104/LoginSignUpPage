import React from 'react'
import './input.css';
const Input =({placeholder,required,onChange,value,type}) => {
  return (
    <div>
      <input
      type={type}
       onChange={onChange} 
       value={value} 
       required={required} 
       placeholder={placeholder}
       className="ui_input"
       />
    </div>
  )
}

export default Input
