import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const TaskList = (props, bookTask) => {
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    fetch('/api/tasks')
    .then((response) => response.json())
    .then((data) => setBooked(data))
    .catch((error) => console.error('Error fetching tasks:', error));
  }, [booked]);

  const handleBookTask = async (id) => {
    try {
      const response = await fetch('/api/tasks/book', {
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



  const showList = props.tasks.map((task) => {
    console.log("TaskList: task", task);

    return (
      <Card className="text-center" key={task._id}>
        <Card.Body>
          <Card.Title>{task.name}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Button variant="primary" className="m-2" onClick={() => props.handleBookTask(task)}>
          <Link
            to={`/task/${task._id}/book`}
            state={task}
            className="text-white text-decoration-none"
            onClick={() => {
              props.handleBookTask(task);}}
          >
              Book
            </Link>
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h2>task List</h2>
      <ul className="task-list">{showList}</ul>
    </>
  );
};

export default TaskList;