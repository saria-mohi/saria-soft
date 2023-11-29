import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import VideoPage from '../../component/VideoPage';
import '../Dashboard/Dashboard.css'; // Assuming you have a CSS file for Dashboard styles
import { FaSearch } from 'react-icons/fa';
import './Video.css'

const Vedio = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-content">
        <div className="search-container">
        <FaSearch className="search-icon" />
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
        <div className="cards-container">
            <VideoPage />
            <VideoPage/>
            {/* <VideoPage />
            <VideoPage />
            <VideoPage /> */}

            {/* You can add more <TaskCard /> components or map through an array */}
          </div>
          {/* You can add more <TaskCard /> components here */}
          {/* Other content can go here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vedio;
