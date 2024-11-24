import React, { useState } from 'react';
import Input from '../ui/input'
import Button from '../ui/Button'
import BackToLogin from '../ui/backToLogin'
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function ForgetPassword() {


    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    const emailChange = (event) => setEmail(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log( email);
        navigate('/otp/verify')
      };
  return (
  <div className='auth_main'>
    <form onSubmit={submitHandler}>
        <div className="auth_container">
            <div className="auth_header">
                < MdEmail />
                <p className='auth_heading'>Forget your password</p>
                <p className='auth_title'>Enter your email address and we will send a 6-digit otp</p>
            </div>
            <div className="auth_item">
                <label >Email</label>
                <Input onChange={emailChange} type="email" placeholder="enter your email"/>
            </div>
            <div className="auth_action">
                <Button type="submit">Send OTP</Button>
            </div>
            <div>
                <BackToLogin/>
            </div>
        </div>
    </form>
    </div>
  )
}

export default ForgetPassword
