import React, { useState } from 'react';
import './TaskForm.css'; // Assuming you will create a CSS file for styling

const TaskForm = () => {
  const [task, setTask] = useState({
    taskName: '',
    startDate: '',
    endDate: '',
    stopTime: '',
    status: 'Pending',
    priority: 'Low'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(task);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={task.taskName}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={task.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={task.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-field">
      <label htmlFor="stopTime">Stop Time:</label>
      <input
        type="time"
        id="stopTime"
        name="stopTime"
        value={task.stopTime}
        onChange={handleChange}
      />      
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={task.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="form-field priority-field">
          <label>Priority:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="priority"
                value="Low"
                checked={task.priority === 'Low'}
                onChange={handleChange}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Medium"
                checked={task.priority === 'Medium'}
                onChange={handleChange}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="High"
                checked={task.priority === 'High'}
                onChange={handleChange}
              />
              High
            </label>
          </div>
        </div>
      </div>
      
      <button type="submit">Creat Task</button>
    </form>
  );
};
    
export default TaskForm;