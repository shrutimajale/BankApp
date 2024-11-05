<<<<<<< HEAD
import React from 'react';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/login.css';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/navbar.css'
import logo from '/home/credentek/Bank Demo/bankdemo/src/images/new-logo.png'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();

    const loginButton = () => {
        navigate('/login');
    };

    const adminButton = () => {
        navigate('/admin');
    };

    
    return(
        <nav class="navbar">
        <div class="container">
           
            <ul class="nav-links">
                <li>
            <a href="#" class="logo">
            <img src={logo} alt="Demo Bank Logo" />
            </a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/ContactUs">Contact Us</a></li>
              
                
            </ul>
           
            <div className="navbar-item announcements">
            <button type="button" className="btn" onClick={loginButton}>Login</button>
        </div>
        </div>
        
       
    </nav>

    )
}

    export default Navbar
=======
import React from "react";
import "/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/login.css";
import "/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/navbar.css";
import logo from "/home/credentek/Bank Demo/bankdemo/src/images/new-logo.png";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const loginButton = () => {
    navigate("/login");
  };

  const adminButton = () => {
    navigate("/admin");
  };

  return (
    <nav class="navbar">
      <div class="container">
        <ul class="nav-links">
          <li>
            <a href="#" class="logo">
              <img src={logo} alt="Demo Bank Logo" />
            </a>
          </li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </ul>

        <div className="navbar-item announcements">
          <button type="button" className="btn" onClick={loginButton}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> master
