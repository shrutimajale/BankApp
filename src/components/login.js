import React from 'react'
import './login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


 const Login = () => {



    return(
 
      <div className='login1'>
        <div className='formbox'>
          <form>
            <h1>Login</h1>
            <div className='inputbox'>
            <input type='text'
            placeholder='Username' required/>
            <FaUser className='icon'/>
            </div>

            <div className='inputbox'>
            <input type='password'
            placeholder='Password' required/>
            <FaLock className='icon'/>
            </div>

            <div className='remember'>
              <label><input type='checkbox'/>Remember me</label>
              <a href='#'>Forgot password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className='register-link'>
              <p>Don't have an account?<Link to='/register' >Register</Link></p>
            </div>
          </form>


        </div>  


      </div>
)
}

export default Login;