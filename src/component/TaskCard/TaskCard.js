import React from 'react';
import './TaskCard.css'; // Make sure to create a CSS file for this component
import { Link } from 'react-router-dom'; // If you're using React Router

const TaskCard = () => {
  return (
    <div className="task-card">
      <div className="task-card-header">
       
        <h3>FINAL ALX</h3>
         <input type="checkbox" />
      </div>
      <p className="remaining-time">Remaining Time: 13:59:20</p>
      <div className="task-dates">
        <div className="start-date">
          <i className="icon">🗓️</i> Start Date: 2023-11-22
        </div>
        <div className="end-date">
          <i className="icon">🗓️</i> End Date: 2023-11-24
        </div>
      </div>
      <div className="task-details">
        <div><i className="icon">⏰</i> Time: 02:10</div>
        <div><i className="icon">🔼</i> Priority: low</div>
        <div><i className="icon">🟡</i> Status: pending</div>
      </div>
      <div className="task-actions">
        <Link to="/edit-task" className="edit-btn">✏️ Edit</Link>&nbsp;
        {/* <button className="edit-btn">✏️ Edit</button>&nbsp; */}
        <button className="delete-btn">🗑️ Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
