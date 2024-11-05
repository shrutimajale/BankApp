import React from 'react';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/contactUs.css';
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <div className="contact-item">
                    <MdPhone className="contact-icon" />
                    <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                    <MdEmail className="contact-icon" />
                    <p>support@YesBank.com</p>
                </div>
                <div className="contact-item">
                    <MdLocationOn className="contact-icon" />
                    <p>1234 Bank Street, Suite 100, Finance City, FC 56789</p>
                </div>
                <div className="contact-item">
                    <MdAccessTime className="contact-icon" />
                    <p>Monday - Friday: 9 AM - 5 PM</p>
                </div>
            </div>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
