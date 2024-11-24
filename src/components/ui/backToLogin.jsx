import React from 'react'
import './backToLogin.css'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const BackToLogin=() => {
    const navigate=useNavigate()
    const navigateHandler= () =>{
    navigate('/Login')
    }
  return (
    <div onClick={navigateHandler} className="ui_back_to_login">
       <FaArrowLeft/>
       <span>back to login</span>
    </div>
  )
}

export default BackToLogin
