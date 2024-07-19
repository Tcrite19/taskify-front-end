import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const initialState = {
  name: "",
  description: "",
};

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
          className="text-white text-decoration-none" />
      </Card.Body>      
    </Card>
  );
};

const TaskList = (props) => {
  const showList = props.tasks.map((task) => {
    console.log("TaskList: task", task);
    return (
      <Card
        className="text-center h-100 shadow-sm bg-white rounded"
        key={task._id}
      >
        <Card.Body>
          <Card.Title>{task.name}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Button
            variant="success"
            className="m-2"
            onClick={() => {
              bookTask(task);
              console.log("TaskList: booking task", task);
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
              console.log("TaskList: booking task", task);
            }}
          >
            Book
          </Link>
        </Card.Body>
      </Card>
    );
  });
  return <>{showList}</>;
};

const SearchForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      props.addTask(formData);
      setFormData(initialState);
      navigate("/task");
    }
    setValidated(true);
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  return (
    <main>
      <h2>Book Your Next Task</h2>
      <p>Enter the details of your next task.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 justify-content-center">
          <Col md="4">
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="d-block mx-auto"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="d-block mx-auto"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a description.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Button
          type="submit"
          variant="primary"
          className="m-auto"
          onClick={handleSubmit}
        >
          Submit form
        </Button>
      </Form>
    </main>
  );
};

export default SearchForm;
