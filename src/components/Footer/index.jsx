import React from 'react';
import './index.css';

const Footer = () => (
    <footer>
        <nav>
          <ul>
            <li><a href="homePage.html">Home</a></li>
            <li><a href="Rooms_suites.html">Rooms & Suites</a></li>
            <li><a href="Dining.html">Dining</a></li>
            <li><a href="Facilities.html">Facilities</a></li>
            <li><a href="Faq.html">FAQs</a></li>
            <li><a href="Contact.html">Contact</a></li>
            <li><a href="About_Us.html">About Us</a></li>
          </ul>
        </nav>
        <ul className="social-icons">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </li>
        </ul>
        <p>All Rights Reserved. Copyright © 2025</p>
        <img className="footer-hotel-logo" src="https://www.thecrownclub.com/assets/images/logo.png" alt="logo" />
        <p> Hotels • Suites • Resorts</p>
        <p>Experience Comfort, Embrace Luxury</p>
      </footer>
)

export default Footer
