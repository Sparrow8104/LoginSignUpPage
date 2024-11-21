import React from 'react'
import './auth.css'
import Input from '../ui/input'
import { FaFolderPlus } from "react-icons/fa";
const register = () => {
  return (
    <div className='auth_main'>
      <form action="">
        <div className="auth_container">
            <div className="auth_header">
               <FaFolderPlus/>
               <p className='auth_heading'>Welcome</p>
               <p className='auth_title'>Create new Account</p>
            </div>
               <div className="auth_item">
                <label >Name</label>
                <Input placeholder="Enter your name" />
               </div>
               <div className="auth_item">
                <label >E-Mail</label>
                <Input placeholder="Enter your email"  required="required" />
               </div>
               <div className="auth_item">
                <label >Password</label>
                <Input placeholder="Enter your email"  required="required" />
               </div>
        </div>
      </form>
    </div>
  )
}

export default register
