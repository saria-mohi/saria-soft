import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaCheckCircle,FaKey,FaCheck} from 'react-icons/fa'; // Importing icons

import './Auth.css'; // The name of your CSS file
const UserProfile = () => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="login-card">
          <h2>Sign Up</h2>
          <p>Welcome to the registration screen...</p>
          <form className="login-form">
            <div className="form-field">
              <FaUser className="icons" /> {/* User icon */}
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-field">
              <FaEnvelope className="icons" /> {/* Email icon */}
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-field">
              <FaLock className="icons" /> {/* Password icon */}
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-field">
              <FaLock className="icons" /> {/* Confirm Password icon */}
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="login-btn">Update </button>
          </form>
        </div>
        <div className="info-box">
          <ul>
          <li><FaCheckCircle className="info-icon" /> CHECK YOUR INFO</li>
    <li><FaCheck className="info-icon" /> Use Valid Data</li>
    <li><FaEnvelope className="info-icon" /> E-MAIL</li>
    <li><FaKey className="info-icon" /> PASSWORD</li>
    <li><FaKey className="info-icon" /> CONFIRM PASSWORD</li>
    
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
