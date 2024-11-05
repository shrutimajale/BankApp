import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import ResetPassword from './ResetPassword';
import "/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/welcome.css";
import { FaBars, FaExchangeAlt, FaDownload, FaFileInvoiceDollar, FaEnvelope } from 'react-icons/fa';
import { FaFilePdf } from "react-icons/fa6";
import { FaUserTie,FaLink} from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import { PiNotepad } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdCall ,MdOutlineAutorenew} from "react-icons/md";
import { SlMagnifierAdd } from "react-icons/sl";
import { SiTradingview } from "react-icons/si";
import { positions } from 'react-alert';


const Welcome=()=>{
  

    const navigate = useNavigate();
    const token = localStorage.getItem('token1') || null;
    const [activeTab, setActiveTab] = useState('accounts'); 
    const [activeTab2, setActiveTab2] = useState('default2');
    const [menuOpen, setMenuOpen] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const logoutButton = async () => {
      try {
       const response= await axios.post('http://192.168.0.78:8080/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error logging out:", error);
    } finally {
        localStorage.removeItem('token');
        navigate('/');
    }
    };

    const resetPassword = () => {
        navigate(`/resetPassword?token=${token}`);
      };

      const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleTabChange2 = (tab) => {
      setActiveTab2(tab);
  };

  const toggleResetPasswordModal = () => {
    setShowResetPassword(!showResetPassword);
  };

    
    return(
 
        <div className="welcome-container">
           
        <nav className="navbar">
           <div className='navdiv'>
            <div>

            <h2>My Dashboard</h2>
            </div>
            <div className='navbuttons'>
            <div className="user-info">
                <button type='button' className='resetbutton' onClick={toggleResetPasswordModal}>Reset Password</button>
            </div>
            <div className="user-info">
                <button type='button' className='logoutbutton' onClick={logoutButton}>Logout</button>
            </div>
            <div class="sidebar">

<nav className='sidenavbar'>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#"><FaUserTie className='sidebar_icon'/> &nbsp;&nbsp;&nbsp;View Accounts</a></li>
        <li><a href="#"><FaLink className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;Link other Accounts</a></li>
        <li><a href="#"><BsCollection className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;Collection Section</a></li>
        <li><a href="#"><FaFileInvoiceDollar className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;E-Invoice</a></li>
        <li><a href="#"><PiNotepad className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;Account Statement</a></li>
        <li><a href="#"><FaMoneyBills className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;Bill Payment</a></li>
        <li><a href="#"><BsPersonLinesFill className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;Virtual Account</a></li>
        <li><a href="#"><MdCall className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;Customer Service</a></li>
        <li><a href="#"><SlMagnifierAdd className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;View Limits</a></li>
        <li><a href="#"><MdOutlineAutorenew className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;Limit Renew</a></li>
        <li><a href="#"><SiTradingview className='sidebar_icon'/>&nbsp;&nbsp;&nbsp;Trade Summary</a></li>
    
    </ul>
</nav>
</div>
            </div>
            </div>
        </nav>
        {menuOpen && (
            <div className="menu">
                <ul>
                    <li><a href="/reset-password">Reset Password</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        )}
       <div className={`content-container ${showResetPassword ? 'blur-content' : ''}`}>

        <div className="content-container">
        
            <div>

          
            {/* <div className={`main-content ${showResetPassword ? 'blur-content' : ''}`}> */}
            
            <div className="main-content">
              
            <ul class="nav nav-underline">
 
  <li class="nav-items">
   <a class="nav-link" href="#" onClick={() => handleTabChange('accounts')} >Accounts & Deposits</a>

  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={() => handleTabChange('borrowing')}>Borrowing</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={() => handleTabChange('fundTransfer')}>Fund Transfer</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={() => handleTabChange('salaryManagement')}>Salary Management</a>
  </li>
  
</ul>

{activeTab === 'accounts' && (
<div>
<div className="acc-info">
                    <div className="account_info1">
                    <button onClick={() => handleTabChange2('default2')}>Current Account</button>
                    </div>
                    <div className="account_info">
                    <button onClick={() => handleTabChange2('Od')}>OD Account</button>
                    </div>
                    <div className="account_info">
                    <button onClick={() => handleTabChange2('eefc')}>EEFC</button>
                    </div>
                    <div className="account_info">
                    <button onClick={() => handleTabChange2('saving')}>Saving Account</button>
                    </div>
                    <div className="account_info">
                    <button onClick={() => handleTabChange2('deposite')}>Deposit</button>
                    </div>  </div>
  {activeTab2==='default2' && (
    <div>
      <div className='table_heading'>
<h4>Current Accounts</h4>
<button>Refresh</button>

      </div>
     
  <table className="customers">
  <tr>
    <th>Account Number</th>
    <th>Last 10 Transactions</th>
    <th>Balance</th>
  </tr>
  <tr>
    <td>00034060000200</td>
    <td><FaFilePdf /></td>
    <td>&#8377; 48,000.01</td>
  </tr>
  <tr>
    <td>00034060000199</td>
    <td><FaFilePdf /></td>
    <td>&#8377; 49,000.01</td>
  </tr>
  <tr>
    <td>00034060000199</td>
    <td><FaFilePdf /></td>
    <td>&#8377; 40,000.01</td>
  </tr>
  
  
</table>
</div>
  )}

  
  
</div>
)}
 <div>
                {/* <div className="account-info">
                    <div className="account">
                        <h3>Balance</h3>
                        <p>&#8377; 1,175.01</p>
                        <span>Available</span>
                    </div>
                </div>

                <div className="actions">
                    <div className="action">
                        <FaExchangeAlt className="action-icon" />
                        <p>Transfer</p>
                    </div>
                    <div className="action">
                        <FaDownload className="action-icon" />
                        <p>Deposit</p>
                    </div>
                    <div className="action">
                        <FaFileInvoiceDollar className="action-icon" />
                        <p>Pay</p>
                    </div>
                    <div className="action">
                        <FaEnvelope className="action-icon" />
                        <p>Message</p>
                    </div>
                </div> */}
  
<div className='table'>
  <div className='customer_table_heading'>
  <p>Ac No: 00034060000200</p>
  <p>Last 10 Transactions</p>
  </div>
 
<table className="customers">
  <tr>
    <th>Sr.No</th>
    <th>Date</th>
    <th>Description</th>
    <th>Amount</th>
    <th>Transaction Type</th>
  </tr>
  <tr>
    <td>1</td>
    <td>24/09/2024</td>
    <td>Funds Trf from XX2354/own account or Funds Trf from XX2354/own account</td>
    <td>&#8377; 40,000.01</td>
    <td>Debit</td>
  </tr>
  <tr>
    <td>2</td>
    <td>24/09/2024</td>

    <td>Funds Trf from XX2354/own account or Funds Trf from XX2354/own account</td>
    <td>&#8377; 40,000.01</td>
    <td>Debit</td>
  </tr>
  <tr>
    <td>3</td>
    <td>24/09/2024</td>
    <td>Funds Trf from XX2354/own account or Funds Trf from XX2354/own account</td>
    <td>&#8377; 40,000.01</td>
    <td>Debit</td>
  </tr>
  <tr>
    <td>4</td>
    <td>24/09/2024</td>
    <td>Funds Trf from XX2354/own account or Funds Trf from XX2354/own account</td>
    <td>&#8377; 40,000.01</td>
    <td>Debit</td>
  </tr>
  <tr>
    <td>5</td>
    <td>24/09/2024</td>
    <td>Funds Trf from XX2354/own account or Funds Trf from XX2354/own account</td>
    <td>&#8377; 40,000.01</td>
    <td>Debit</td>
  </tr>
  
</table>
<br/>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
  
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

<div className='card shadow'>
  <p className='card_heading'>Pending Tasks</p>
  <p>Clear Overdues</p>
  <p>Submit Document</p>
  <p>Check Limits Expiry</p>
  <p>Check Payments Due</p>
</div>

<div className='card2 shadow2'>

  <p className='card2_heading'>Pending Authorization</p>
  <p >Authorized Signatory</p>
  <p>Fund Transfer</p>
  <p>Beneficiary Management </p>
  <p>Salary Upload</p>


</div>

</div>
</div> 
</div> 
{/* </div> */}
</div> 
 </div>
 </div>       {showResetPassword && <ResetPassword closeModal={toggleResetPasswordModal} />}
            </div>
);
   
       
}
export default Welcome;