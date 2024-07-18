import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const TaskList = (props) => {
  const showList = props.task.map((task) => {
    console.log("TaskList: task", task);

    return (
      <Card className="text-center" key={task._id}>
        <Card.Body>
          <Card.Title>{task.name}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Button variant="primary" className="m-2" onClick={() => props.bookTask(task)}>
          <Link
            to={`/task/${task._id}/book`}
            state={task}
            className="text-white text-decoration-none"
            onClick={() => {
              props.bookTask(task);}}
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
      <ul>{showList}</ul>
    </>
  );
};

export default TaskList;
