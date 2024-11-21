import React from 'react'
import './backToLogin.css'
import { FaArrowLeft } from "react-icons/fa";
const BackToLogin=() => {
  return (
    <div className="ui_back_to_login">
       <FaArrowLeft/>
       <span>back to login</span>
    </div>
  )
}

export default BackToLogin
