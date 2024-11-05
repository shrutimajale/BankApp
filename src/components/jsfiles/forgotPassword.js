import React from 'react'
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/login.css';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/register.css';
import { useState } from 'react';
import { FaUser } from "react-icons/fa";

import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const ForgotPassword = () => {

    
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();
   
    const handleSendOtp = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://192.168.0.78:8080/forgot-password', { email });

          console.log(response)
          const otp = response.data.otp;
          localStorage.setItem('otp', otp); 
          localStorage.setItem('email', email); 
          // Store OTP in local storage
          alert(`Your OTP is: ${otp}`);
          navigate("/verify-otp");
        
        
      
      } catch (error) {
          console.error('Error generating OTP:', error);
      }

     
  };

      return(
   
        <div className='login1'>
          <div className='formbox'>
            <form onSubmit={handleSendOtp}>
              <h1>Enter Email</h1>
              <div className='inputbox'>
              <input type='email'
              id='email'
              value={email}
              
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value) }
                required/>
              <FaUser className='icon'/>
              </div>

              <button type='submit'>Send OTP</button>
  
            </form>
  
  
          </div>  
  
  
        </div>
  )
  }
  
  export default ForgotPassword;