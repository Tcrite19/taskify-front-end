import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TaskCard from "../TaskCard/TaskCard.jsx";


const TaskList = ( { tasks = [], handleBookTask }) => {
  const [taskList, setTaskList] = useState(tasks);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setTaskList(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);


  const showList = taskList.map((task) => (
    <Card className="text-center" key={task._id}>
      <Card.Body className="shadow-sm bg-white rounded">
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Button
          variant="success"
          className="m-5 order-btn dashboard-link"
          onClick={() => handleBookTask(task._id)}
        >
          <Link
            to={`/task/${task._id}/book`}
            state={task}
            className="text-white text-decoration-none"
          >
            Book
          </Link>
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <h2>Tasks List</h2>
      <ul className="task-list">{showList}</ul>
    </>
  );
};

export default TaskList;