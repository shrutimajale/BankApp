import React, { useState } from 'react';

import { FaBars, FaExchangeAlt, FaDownload, FaFileInvoiceDollar, FaEnvelope } from 'react-icons/fa';

const Trial=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="welcome-container">
            <nav className="navbar">
               
                <h2>My Dashboard</h2>
                <div className="user-info">
                    <button type='button' className='menubutton' onClick={toggleMenu}>Menu</button>
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
            <div className="content-container">
                <div className="background-section"></div>
                
                <div className="main-content">
                    <div className="account-info">
                        <div className="account">
                            <h3>Balance</h3>
                            <p>1,175.01</p>
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
                    </div>

                    <div className="dashboard">
                        <div className="card transactions">
                            <h4>Transactions</h4>
                            <ul>
                                <li>
                                    <span>YOUR TOWN CINEMA</span>
                                    <span>$7.50</span>
                                </li>
                                <li>
                                    <span>GEORGES BBQ & PUB</span>
                                    <span>$37.25</span>
                                </li>
                                <li>
                                    <span>YOUR TOWN UTILITIES</span>
                                    <span>$76.46</span>
                                </li>
                                <li>
                                    <span>EL GRAN RESTAURANTE</span>
                                    <span>$13.98</span>
                                </li>
                                <li>
                                    <span>ATM DEPOSIT</span>
                                    <span className="positive">+$37.25</span>
                                </li>
                                <li>
                                    <span>LE PETITE CAFE</span>
                                    <span>$2.61</span>
                                </li>
                            </ul>
                            <a href="#" className="view-all">View All</a>
                        </div>

                        <div className="card deposit-checks">
                            <h4>Deposit Checks</h4>
                            <p><span>0 Processing</span> <span>9 Accepted</span></p>
                            <button>Make a deposit</button>
                        </div>

                        {/* <div className="card messages">
                            <h4>Messages</h4>
                            <ul>
                                <li>
                                    <span>Holiday Hours</span>
                                    <span>Our branches will be closed on Thursday.</span>
                                </li>
                                <li>
                                    <span>Low Funds: Checking</span>
                                    <span>Available balance is low on Checking.</span>
                                </li>
                                <li>
                                    <span>Jennifer and Amy</span>
                                    <span>No problem! We'll send a new card out first...</span>
                                </li>
                                <li>
                                    <span>Home improvement...</span>
                                    <span>Find out how you can get started.</span>
                                </li>
                                <li>
                                    <span>Deposit to Savings</span>
                                    <span>A deposit was made to Savings.</span>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trial;
  