import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/register.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = ({ closeModal }) => {
    const [showPassword, setShowPassword] = useState(false); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); 
    const validatePassword = () => {
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters");
          return false;
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must contain at least one uppercase letter");
          return false;
        }
        if (!/[!@#$%^&*()_+?"{}><]/.test(password)) {
            setErrorMessage("Password must contain at least one special character");
          return false;
        }
        if (!/[0-9]/.test(password)) {
            setErrorMessage("Password must contain at least one number");
          return false;
        }
        return true;
      };
    
  


    const handleSubmit = async (e) => {
        e.preventDefault();

     
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        const token = localStorage.getItem('token1');
        if(validatePassword()){
        try {
            const response=await axios.post(
                `http://192.168.0.78:8080/resetPassword`,
                { password },
                { headers: { 
                Authorization: `Bearer ${token}` } }
                
           
                );
                console.log(response.data);
            setSuccessMessage('Password reset successfully!');
            navigate('/welcome');
            alert("Password reset successfully")
            setErrorMessage('')
            setPassword('');
            setConfirmPassword('');
            closeModal();
        } catch (errorMessage) {
          if (errorMessage.response) {
            setErrorMessage(errorMessage.response.data);
          }
          }  }
    };

    return (
        <div className='login1'>
             <div className='formbox'>
            
            <form onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
            <div className='inputbox'>
                <input
                    type={showPassword ? 'text' : 'password'} 
                    value={password}
                    placeholder='New Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                 <div className='icon' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </div>
                </div>
             
             <div className='inputbox'>
                <input
                    type={showPassword ? 'text' : 'password'} 
                    value={confirmPassword}
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                 <div className='icon' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle between eye and eye-slash */}
            </div>
                    </div>
                <button type="submit">Reset Password</button>
          
            <div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'blue' }}>{successMessage}</p>}
            </div>
            </form>
            <button onClick={closeModal} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default ResetPassword;
