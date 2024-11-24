import React, { useState } from 'react'
import Input from '../ui/input'
import Button from '../ui/Button'
import BackToLogin from '../ui/backToLogin'
import { MdUpdate } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function UpdatePassword() {

    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const navigate=useNavigate()
    const passwordChange=(event) =>{
        setPassword(event.target.value)
    }
    const confirmPasswordChange=(event) =>{
        setConfirmPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(password,confirmPassword)
        navigate('/login')
      };
  return (
    <div className='auth_main'>
       <form onSubmit={submitHandler}>
        <div className="auth_container">
            <div className="auth_header">
                <MdUpdate/>
              <p className='auth_heading'>New password</p>
              <p className='auth_title'>Enter 6-digit strong password</p>
          
            </div>
            <div className="auth_item">
                <label>Password</label>
                <Input onChange={passwordChange} type="text" required placeholder=" password"/>
            </div>
            <div className="auth_item">
                <label>Confirm password</label>
                <Input onChange={confirmPasswordChange} type="text" required placeholder="confirm password"/>
            </div>
            <div className="auth_action">
                <Button onClick={submitHandler}>Update Password</Button>
            </div>
            <div>
                <BackToLogin/>
            </div>
        </div>
       </form>
    </div>
  )
}

export default UpdatePassword
