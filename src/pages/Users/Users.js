import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import Header from '../../component/Header/Header';
import UserProfile from '../../component/UserProfile';
import './Users.css'; // Make sure you have a CSS file for Tasks

function Users() {
  return (
    <div className="tasks">
      <Header />
      <div className="tasks-body">
        <Sidebar />
        <div className="tasks-content">
          <UserProfile />
          
          {/* You can add more content here as needed */}
        </div>
      </div>
      {/* If you have a Footer, it can go here */}
    </div>
  );
}

export default Users;