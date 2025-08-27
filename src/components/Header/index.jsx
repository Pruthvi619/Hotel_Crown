import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // import Link and useLocation for active menu
import './index.css';

const toggleMenu = () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
};

const Header = () => {
  const location = useLocation(); // get current path to manage active link

  return (
    <>
    <header>
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" className={location.pathname === '/rooms' ? 'active' : ''}>
              Rooms & Suites
            </Link>
          </li>
          <li>
            <Link to="/dining" className={location.pathname === '/dining' ? 'active' : ''}>
              Dining
            </Link>
          </li>
          <li>
            <Link to="/facilities" className={location.pathname === '/facilities' ? 'active' : ''}>
              Facilities
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/login" title="Login" style={{ marginLeft: 10 }}>
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li>
            <div id="colorToggle" title="Toggle Background Color">
              <i className="fas fa-lightbulb"></i>
            </div>
          </li>
        </ul>
      </nav>
      <img
        className="hotel-logo"
        src="https://www.thecrownclub.com/assets/images/logo.png"
        alt="logo"
      />
      <p className="logo-caption">" Experience Comfort, Embrace Luxury "</p>
    </header>
    </>
  );
};

export default Header;
