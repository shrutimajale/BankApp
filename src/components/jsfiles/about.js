import React from 'react';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/about.css';
import { FaHandsHelping, FaBullhorn, FaPeopleArrows } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="overview">
                <h2>Our Story</h2>
                <p>
                    Welcome to Yes Bank, where our commitment to customer satisfaction drives everything we do. Founded in 2024, our mission is to provide reliable, secure, and innovative banking solutions to help you achieve your financial goals.
                </p>
            </div>
            <div className="mission-values">
                <div className="mission">
                    <FaHandsHelping className="icon" />
                    <h3>Our Mission</h3>
                    <p>
                        To deliver exceptional financial services that empower our customers and support the communities we serve.
                    </p>
                </div>
                <div className="values">
                    <FaBullhorn className="icon" />
                    <h3>Our Values</h3>
                    <ul>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Customer Focus</li>
                        <li>Excellence</li>
                    </ul>
                </div>
                <div className="team">
                    <FaPeopleArrows className="icon" />
                    <h3>Meet Our Team</h3>
                    <p>
                        Our dedicated team of professionals is here to provide you with personalized support and expert guidance. Together, we are committed to your success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
