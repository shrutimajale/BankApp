import React, { useState} from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const VerifyOtp=()=>{

    const [otp, setOtp] = useState('');
const [password,setPassword]=useState('');
const [showPassword, setShowPassword] = useState(false); 
const [successmsg,setSuccessmsg]=useState('');
const [errormsg,setErrormsg]=useState('');
const navigate = useNavigate();
const [otpVerified, setOtpVerified] = useState(false);


const validate = () => {
  if (password.length < 6) {
    setErrormsg("Password must be at least 6 characters");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    setErrormsg("Password must contain at least one uppercase letter");
    return false;
  }
  if (!/[!@#$%^&*()_+?"{}><]/.test(password)) {
    setErrormsg("Password must contain at least one special character");
    return false;
  }
  if (!/[0-9]/.test(password)) {
    setErrormsg("Password must contain at least one number");
    return false;
  }
 
  return true;
};



    const handleVerifyOtp = async (e) => {

        e.preventDefault(); 
        try {
            const storedOtp = localStorage.getItem('otp');
            const storedEmail = localStorage.getItem('email');
            if (otp === storedOtp) {
                const response = await axios.post('http://192.168.0.78:8080/verify-otp', { email: storedEmail, otp });
                if (response.status === 200) {
                  setSuccessmsg('OTP verified.');
                    setOtpVerified(true); // Set OTP as verified
                   
                }
            } else {
              setErrormsg('Invalid OTP.');
            }
        } catch (error) {
            console.error('Invalid or expired OTP:', error);
            setErrormsg('Invalid or expired OTP');
        }
    };

    const handlePasswordReset = async (e) => {
      e.preventDefault();
      setSuccessmsg('');
      if(validate()){
      try {
       
        const storedEmail = localStorage.getItem('email');
        const response = await axios.post('http://192.168.0.78:8080/reset-password', { email: storedEmail, password });
        if (response.status === 200) {
          setSuccessmsg('Password has been reset successfully.');
          alert('Password has been reset successfully.');
          navigate("/login"); // Redirect to login page after successful password reset
        }
      } catch (error) {
        console.error(error);
        setErrormsg(error.response.data);
      }
    }
    };
  
    return(
   
        <div className='login1'>
          <div className='formbox'>
            {!otpVerified ? (
            <form onSubmit={handleVerifyOtp}>
              <h1>Enter OTP</h1>
              <div className='inputbox'>
              <input  type='text'
              id='otp'
              value={otp}
              
              placeholder='OTP'
              onChange={(e) => setOtp(e.target.value) }
                required/>
             
              </div>
              <div>
              <button type='submit'>Verify OTP</button>
              </div>
              <div>
            {setErrormsg && <p style={{ color: 'red' }}>{errormsg}</p>}
            {setSuccessmsg && <p style={{ color: 'blue' }}>{successmsg}</p>}
            </div>
            </form>
            ):(// Password reset form
            <form onSubmit={handlePasswordReset}>
              <h1>Reset Password</h1>
              <div className='inputbox'>
                <input
                  type={showPassword ? 'text' : 'password'} 
                  id='password'
                  value={password}
                  placeholder='New Password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                 <div className='icon' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </div>
              </div>
              <div>
              <button type='submit'>Reset Password</button>
              </div>
              <div>
            {setErrormsg && <p style={{ color: 'red' }}>{errormsg}</p>}
            {setSuccessmsg && <p style={{ color: 'blue' }}>{successmsg}</p>}
            </div>
            </form>
          )}
  
          </div>  
  
  
        </div>
  )
}

export default VerifyOtp;