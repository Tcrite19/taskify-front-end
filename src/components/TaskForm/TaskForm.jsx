import React, { useState, useEffect } from 'react';
import '../TaskList/TaskList.css';
const TaskForm = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleBookTask = async (id) => {
    try {
      const response = await fetch('/tasks/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const updatedTask = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error('Error booking task:', error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <p>Booked: {task.booked ? 'Yes' : 'No'}</p>
            <button onClick={() => handleBookTask(task._id)}>
              Book Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskForm;
