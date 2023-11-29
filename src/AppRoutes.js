

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import VideoPage from './component/VideoPage';
import Vedio from './pages/Video/Vedio';
// Import other pages...

function AppRoutes() {
  return (
    <Router>
     <Routes>
     <Route path="/" element={<WelcomePage />} />
     <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Tasks" element={<Tasks />} />
      <Route path="/edit-task" element={<TaskOperation />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/VideoPage" element={<VideoPage />} />
      <Route path="/Vedio" element={<Vedio/>}/>


      {/* ... set up other routes */}
    </Routes>
    </Router>
  );
}

export default AppRoutes;
