import React from 'react'
import axios from 'axios';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/register.css';
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


 const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');


  // Validate the input 
  const validate = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/[!@#$%^&*()_+?"{}><]/.test(password)) {
      setError("Password must contain at least one special character");
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number");
      return false;
    }
   
    return true;
  };


  

    const handleRegister = async (e) => {
      e.preventDefault();
      
      if (validate()) {
        try {
          const response = await axios.post('http://192.168.0.78:8080/register', {
            username,
            email,
            password,
          });
          setSuccessMessage("Signup successful! Please log in.");
          alert("Registration Successful")
          setError('');
        
          setEmail('')
          setPassword('')
          setUsername('')

        } catch (err) {
          if (err.response.status === 409) {
            setError("Email already used. Please try a different email.");
          } else {
            setError("Signup failed. Please try again.");
          }
          setSuccessMessage('');
        }
      }
    };
  
    
  

    return(
 
      <div className='login1'>
         
        <div className='formbox'>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <div className='inputbox'>
            <FaUser className='icon'/>
            <input type='text'
            id='username'
            value={username}
            placeholder='Username' 
            onChange={(e) => setUsername(e.target.value) }
            required/>
            
            </div>

            <div className='inputbox'>
            <input type='email'
            id='email'
            value={email}
            placeholder='Email' 
            onChange={(e) => setEmail(e.target.value)}
            required/>
           <MdEmail className='icon'/>

            </div>

            <div className='inputbox'>
            <input   type={showPassword ? 'text' : 'password'} 
            id='password'
            value={password}
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)}
            required/>
         
            <div className='icon' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle between eye and eye-slash */}
            </div>
            </div>

         

            <button type='submit'>Register</button>

            <div className='register-link'>
              <p>Already have an account? 
                <Link to="/login">  Login here</Link></p>
            </div>
            <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {setSuccessMessage && <p style={{ color: 'white' }}>{setSuccessMessage}</p>}
            </div>
          </form>

         


        </div>  


      </div>
);
};

export default Register;