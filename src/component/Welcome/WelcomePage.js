import React from 'react';
import './WelcomePage.css'; // Make sure to create this CSS file
import { Link } from 'react-router-dom'; // If you're using React Router

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Task Manager Application</h1>
      <p>Welcome to the task management website. You can now enjoy the task management experience. You can create and manage your tasks easily through the website. All you have to do is join us by creating an account and logging in.</p>
      <div className="buttons">
        <button className="login-btn"><Link to="/login">LOGIN</Link></button>
        <button className="signup-btn"><Link to="/signup">SIGN UP</Link></button>

      </div>
      {/* You might want to link these buttons to your login/signup route */}
    </div>
  );
};

export default WelcomePage;
