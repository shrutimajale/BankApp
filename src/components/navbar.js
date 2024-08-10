// import { Link } from 'react-router-dom';
import './login.css';
import './navbar.css'
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";


const Navbar = () => {
    return(
        <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">Bank Demo</a>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
            <div>
            <ImWhatsapp className='iconnav'/>
            <FaInstagram className='iconnav'/>
            <IoCall className='iconnav'/>
            <FaFacebook className='iconnav'/>
            </div>
          
            <form class="search-form" action="#" method="get">
           
                <input type="text" name="search" placeholder="How can I help you?"/>
                <button type="submit">Search</button>
            </form>
        </div>
        
       
    </nav>

    )
}

    export default Navbar