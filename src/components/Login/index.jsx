import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-row">
          <div className="login-col image-col">
            <img
              src="https://www.thecrownclub.com/assets/images/logo.png"
              className="login-img"
              alt="Sample"
            />
          </div>
          <div className="login-col form-col">
            <div className="social-signin">
              <p>Sign in with</p>
              <button className="icon-btn"><i className="fab fa-facebook-f"></i></button>
              <button className="icon-btn"><i className="fab fa-twitter"></i></button>
              <button className="icon-btn"><i className="fab fa-linkedin-in"></i></button>
            </div>

            <div className="divider">
              <span>Or</span>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" placeholder="Enter email" />
            </div>

            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter password"
              />
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            <div className="form-options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#!">Forgot password?</a>
            </div>

            <button className="login-btn">Login</button>

            <p className="register-link">
              Don’t have an account? <Link to="/register" className="link-danger">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
