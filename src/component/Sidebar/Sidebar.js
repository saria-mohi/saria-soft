import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaUser,FaSignOutAlt } from 'react-icons/fa'; // Importing icons

import './Sidebar.css'; // Assuming you will create a CSS file for styling
import logo from '../../Assets/Logo.jpg';
function Sidebar() {
  return (
    // <div className="sidebar">
    //   <div className="sidebar-header">

    //   <img src={logo} alt='Logo' className='logo'></img>

    //   </div>
    //   <hr></hr>
    //   <ul className="sidebar-links">
    //     <li><Link to="/Dashboard">Dashboard</Link></li>
    //     <li><Link to="/users">Users</Link></li>
    //     <li><Link to="/tasks">Tasks</Link></li>
    //     {/* Add other links as needed */}
    //   </ul>
    // </div>
    
    <div className="sidebar-container">
      {/* <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div> */}
      <div className="sidebar-menu">
      <img src={logo} alt="Logo" className="sidebar-logo" />
        <hr></hr>
        <Link to="/Dashboard" className="sidebar-link">
          <FaHome className="sidebar-icon" />
          Dashboard
        </Link>
        <div className='divider'></div> {/* Divider line */}
        <Link to="/tasks" className="sidebar-link">
          <FaTasks className="sidebar-icon" />
          Tasks
        </Link>
        <div className='divider'></div> {/* Divider line */}

        <Link to="/users" className="sidebar-link"> {/* Fixed Link component */}
          <FaUser className="sidebar-icon" />  {/* User icon */}
          Profile
        </Link>
        <div className='divider'></div> {/* Divider line */}

        <Link to="/Vedio" className="sidebar-link"> {/* Fixed Link component */}
          <FaUser className="sidebar-icon" />  {/* User icon */}
          Lec
        </Link>
        <div className='divider'></div> {/* Divider line */}

        {/* <link to="/users" className="sidebar-link">
          <FaTasks className="sidebar-icon" />  
          Users
        </link> */}
        {/* Add more sidebar links here */}
      </div>
      <div className="sidebar-logout">
        <Link to="/logout" className="sidebar-link">
          <FaSignOutAlt className="sidebar-icon" />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
