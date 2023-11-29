import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { FaEnvelope, FaLock,FaCheckCircle,FaKey, FaQuestion } from 'react-icons/fa'; // Importing icons

import './Auth.css'; // The name of your CSS file

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="login-card">
          <h2>Sign In</h2>
          <p>Welcome to the login screen...</p>
          <form className="login-form">
          <div className="form-field">
          <FaEnvelope className="icons" /> {/* Email icon */}
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-field">
              <FaLock className="icons" /> {/* Password icon */}
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="login-btn">LOGIN</button>
          </form>
        </div>
        <div className="info-box">
        <ul>
            <li><FaCheckCircle className="info-icon" /> CHECK YOUR INFORMATION</li>
            <li><FaEnvelope className="info-icon" /> E-MAIL</li>
            <li><FaKey className="info-icon" /> PASSWORD</li>
            <li><FaQuestion className="info-icon" />To Create an Account Click <Link to="/signup"> HERE</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;