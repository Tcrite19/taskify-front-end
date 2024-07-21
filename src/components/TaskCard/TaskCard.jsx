import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TaskCard.css";

const TaskCard = (task, bookTask) => {
  return (
    <>
      <Link to={`/task/${task._id}`}></Link>
      <Card className="text-center h-100 shadow-sm bg-white rounded">
        <Card.Body>
          <Card.Title>{task.name}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <BookingAddress task={task} bookTask={bookTask} />
        </Card.Body>
      </Card>
    </>
  );
};

export default TaskCard;
