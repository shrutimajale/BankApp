import React from 'react'
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/home.css'

const Home = () => {

    return(

    <body>
    
    <header class="hero">
        <h1>Welcome to Yes Bank</h1>
        <p>Your trusted partner for financial solutions.</p>
       
    </header>

    <section class="features">
        <div class="feature-card">
            <h3>Online Banking</h3>
            <p>Access your accounts anytime, anywhere.</p>
        </div>
        <div class="feature-card">
            <h3>Loan Services</h3>
            <p>Personal, home, and auto loans with competitive rates.</p>
        </div>
        <div class="feature-card">
            <h3>Investment Options</h3>
            <p>Grow your wealth with our investment solutions.</p>
        </div>
        <div class="feature-card">
            <h3>Customer Support</h3>
            <p>24/7 assistance for all your banking needs.</p>
        </div>
    </section>

   
    <section class="news">
        <h2>Latest Updates</h2>
        <div class="news-ticker">
            <p>New loan products available with reduced interest rates!</p>
            <p>Exciting new features in our mobile app coming soon.</p>
        </div>
    </section>

    
    <footer>
        <p>&copy; 2024 Yes Bank. All rights reserved.</p>
        <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </footer>
</body>
    )}

    export default Home

