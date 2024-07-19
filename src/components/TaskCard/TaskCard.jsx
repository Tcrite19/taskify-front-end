import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const TaskCard = (task, setOrdered, bookTask) => {
  
  return (
    <Card className="text-center h-100 shadow-sm bg-white rounded">
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Button
          variant="success"
          className="m-2"
          onClick={() => {
            bookTask(task);
            console.log("TaskCard: booking task", tasks);
          }}
        >
          Book
        </Button>
        <Link
          to={`/task/${task._id}/book`}
          state={task}
          className="text-white text-decoration-none"
          onClick={() => {
            setOrdered(true);
            console.log("TaskCard: booking task", task);
          }}
        >
          Book
        </Link>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
