

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import Profile from './pages/Profile/Profile';
import Tasks from './pages/Tasks/Tasks';
import Messages from './pages/Messages';
import WelcomePage from './component/Welcome/WelcomePage';
import Login from './component/Login';
import Signup from './component/Signup';
import TaskOperation from './pages/Tasks/TaskOperation';
import UserProfile from './component/UserProfile';
// Import other pages...

function AppRoutes() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<WelcomePage />} />
      <Route path="/about" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/edit-task" element={<TaskOperation />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user-profile" element={<UserProfile />} />
      
      {/* other routes */}
    </Routes>
  </Router>
    // <Router>
    //  <Routes>
    //  <Route path="/" element={<WelcomePage />} />
    //  <Route path="/Dashboard" element={<Dashboard />} />
    //   <Route path="/users" element={<Users />} />
    //   <Route path="/Profile" element={<Profile />} />
    //   <Route path="/Tasks" element={<Tasks />} />
    //   <Route path="/edit-task" element={<TaskOperation />} />
    //   <Route path="/Messages" element={<Messages />} />
    //   <Route path="/Login" element={<Login />} />
    //   <Route path="/Signup" element={<Signup />} />
    //   <Route path="/Profile" element={<Profile />} />
    //   <Route path="/UserProfile" element={<UserProfile />} />

    //   {/* ... set up other routes */}
    // </Routes>
    // </Router>
  );
}

export default AppRoutes;
