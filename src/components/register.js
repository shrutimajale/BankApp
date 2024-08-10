import React from 'react'
import './register.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
 const Register = () => {


    return(
 
      <div className='login1'>
        <div className='formbox'>
          <form>
            <h1>Registration</h1>
            <div className='inputbox'>
            <input type='text'
            placeholder='Username' required/>
            <FaUser className='icon'/>
            </div>

            <div className='inputbox'>
            <input type='email'
            placeholder='Email' required/>
           <MdEmail className='icon'/>

            </div>

            <div className='inputbox'>
            <input type='password'
            placeholder='Password' required/>
            <FaLock className='icon'/>
            </div>

            <div className='remember'>
              <label><input type='checkbox'/>I agree the terms & conditions</label>
              
            </div>

            <button type='submit'>Register</button>

            <div className='register-link'>
              <p>Already have an account? 
                <Link to="/login">  Login here</Link></p>
            </div>
          </form>

         


        </div>  


      </div>
)
}

export default Register;