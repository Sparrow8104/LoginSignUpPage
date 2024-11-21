import React, { useState } from 'react'
import './auth.css'
import Input from '../ui/input'
import { FaFolderPlus } from "react-icons/fa";
import Button from "../ui/Button"
import BackToLogin from "../ui/backToLogin"
const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const nameChange=(event) =>{
        setName(event.target.value)
    }

    const emailChange=(event) => {
        setEmail(event.target.value)
    }

    const passwordChange=(event) => {
        setPassword(event.target.value)
    }
    const submitHandler = (event) => {
          event.preventDefault();
          console.log({name,email,password})
    }
  return (
    <div className='auth_main'>
      <form onSubmit={submitHandler}>
        <div className="auth_container">
            <div className="auth_header">
               <FaFolderPlus/>
               <p className='auth_heading'>Welcome</p>
               <p className='auth_title'>Create new Account</p>
            </div>
               <div className="auth_item">
                <label >Name</label>
                <Input placeholder="Enter your name" required value={name} onChange={nameChange}/>
               </div>
               <div className="auth_item">
                <label >E-Mail</label>
                <Input placeholder="Enter your email"  required type="email" value={email} onChange={emailChange}/>
               </div>
               <div className="auth_item">
                <label >Password</label>
                <Input placeholder="Enter your password"  required type="password" value={password} onChange={passwordChange}/>
               </div>
               <div className="auth_action">
                <Button type="submit" children="Register" />
               </div>
               <div>
                <BackToLogin/>
               </div>
        </div>
      </form>
    </div>
  )
}

export default Register
