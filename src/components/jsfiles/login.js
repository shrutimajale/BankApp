import React, { useState } from 'react';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/login.css';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/register.css';
import '/home/credentek/Bank Demo/bankdemo/src/components/jsfiles/register.js';
import '/home/credentek/Bank Demo/bankdemo/src/components/jsfiles/welcome.js';
import { login } from '/home/credentek/Bank Demo/bankdemo/src/components/jsfiles/AuthService.js';
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdminForm, setIsAdminForm] = useState(true); // State to toggle between forms
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      const { token, role } = response;
      if (token) {
        localStorage.setItem('token1', token);
        if (isAdminForm && role === 'ADMIN') {
          navigate('/admin', { state: { email } });
        } else if (!isAdminForm && role === 'USER') {
          navigate('/welcome', { state: { email } });
        } else {
          setError("Unauthorized role for the selected form");
        }
      } else {
        setError("Login failed. Please try again.");
      }
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Login failed:', err);
      setError("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div className='login1'>
      <div className='formbox'>
        <button className="loginbuttons" onClick={() => setIsAdminForm(true)}>Login as Admin</button>
        <button className="loginbuttons" onClick={() => setIsAdminForm(false)}>Login as User</button>
        <br/>
        {isAdminForm ? (
          <form onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            <div className='inputbox'>
              <input
                type='email'
                id='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className='icon' />
            </div>
            <div className='inputbox'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className='icon' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <button type='submit'>Login</button>
            <div className='remember'>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
           
            <div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>User Login</h1>
            <div className='inputbox'>
              <input
                type='email'
                id='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className='icon' />
            </div>
            <div className='inputbox'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className='icon' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <button type='submit'>Login</button>
            <div className='remember'>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className='register-link'>
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
            <div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </form>
        )}
      </div>  
    </div>
  )
}

export default Login;
