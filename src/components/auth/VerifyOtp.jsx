import React, { useEffect, useRef, useState } from 'react';
import { IoIosFingerPrint } from "react-icons/io";
import Button from '../ui/Button';
import BackToLogin from '../ui/backToLogin';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
function VerifyOtp() {

    const ref1=useRef(null)
    const ref2=useRef(null)
    const ref3=useRef(null)
    const ref4=useRef(null)
    const ref5=useRef(null)
    const ref6=useRef(null)

    const navigate=useNavigate();
    const inputRef=[ref1,ref2,ref3,ref4,ref5,ref6]

    const [otp1,setOtp1]=useState('');
    const [otp2,setOtp2]=useState('');
    const [otp3,setOtp3]=useState('');
    const [otp4,setOtp4]=useState('');
    const [otp5,setOtp5]=useState('');
    const [otp6,setOtp6]=useState('');
    const otpArray=[setOtp1,setOtp2,setOtp3,setOtp4,setOtp5,setOtp6]

    useEffect(()=>{
        if(ref1.current){
            ref1.current.focus();
        }
    },[])

    const inputChange=(event,location) =>{
        const value = event.target.value.slice(0, 1);
        event.target.value=value;
      if(location<5&&value){
        inputRef[location+1].current.focus();}
        otpArray[location](event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const finalOtp=otp1+otp2+otp3+otp4+otp5+otp6
        console.log(finalOtp)

        navigate('/password/update')
    }
  return (
    <div className='auth_main'>
        <form onSubmit={submitHandler}>
            <div className="auth_container">
                <div className="auth_header">
                    <IoIosFingerPrint/>
                    <p className="auth_heading">
                     Verify your OTP
                    </p>
                    <p className="auth_title">
                     Enter 6-digit code sent over your email
                    </p>
                </div>
                <div className="auth_item">
                    <label >OTP</label>
                    <div className="otp_input_container">
                        {inputRef.map((item,index) =>{
                            return <input 
                            required
                            onChange={(event) => inputChange(event,index)}
                            ref={item}
                            onInput={(event) =>{
                                event.target.value = event.target.value.slice(0, 1);
                            }} type="number" className="ui_input otp_input"/>
                        })
                        }
                    </div>
                </div>
                <div>
                        <Timer/>
                    </div>
                <div className="auth_action">
                        <Button type="submit" onclick={submitHandler}>Verify</Button>
                    </div>
    
                    <div>
                        <BackToLogin/>
                    </div>
            </div>
        </form>
    </div>
  )
}

export default VerifyOtp
