import React, { useState } from 'react';
import Input from '../ui/input'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import { IoIosLogIn } from "react-icons/io";
const Login=() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailChange = (event) => setEmail(event.target.value);
    const passwordChange = (event) => setPassword(event.target.value);
  
    const submitHandler = (event) => {
        event.preventDefault();
        console.log({ email, password });
      };
  return (
    <div className='auth_main'>
      <form onSubmit={submitHandler}>
        <div className="auth_container">
            <div className="auth_header">
                <IoIosLogIn/>
                <p className='auth_heading'>Welcome</p>
                <p className='auth_title' >login to continue
                </p>
                </div>
            <div className="auth_item">
                <label>Email</label>
                <Input required onChange={emailChange} type="email" placeholder="enter your email"/>
            </div>
            <div className="auth_item">
                <label>Password</label>
                <Input required onChange={passwordChange} type="password" placeholder="enter your password"/>
            </div>
            <div className="auth_action">
                <Button>Login</Button>
            </div>
            <div className="auth_options">
                <Link to='/register'>Create new account?</Link>
                <Link to='/forget/password'>Forget password</Link>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Login
