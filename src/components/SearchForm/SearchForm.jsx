import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
};
const SearchForm = () => {
  const [searchTask, setSearchTask] = useState("");
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const fetchTask = async (task) => {
    try {
      const response = await fetch(`/api/tasks?name=${task}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const tasks = await response.json();
      if (tasks.length > 0) {
        navigate(`/tasks/${tasks[0]._id}`);
        fetchTask(tasks[0]._id);
        
        setFormData(initialState);
        setSearchTask("");
        alert('Task found');
      } else {
        alert('Task not found');
      }
    } catch (error) {
      console.error('Error fetching task:', error);
      alert('Error fetching task');
    }
  };

  useEffect(() => {
    if (searchTask) {
      handleSubmit();
    }
  }, [searchTask]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const response = await fetch(`/api/tasks?name=${searchTask}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const tasks = await response.json();
        if (tasks.length > 0) {
          navigate(`/tasks/${tasks[0]._id}`);
          addTask(tasks[0]);
          setFormData(initialState);
          setSearchTask("");
          setValidated(true);
          alert('Task found');
        } else {
          alert('Task not found');
        }
      } catch (error) {
        console.error('Error fetching task:', error);
        alert('Error fetching task');
      }
    }
    form.checkValidity();
    setValidated(true);
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  return (
    <Container>
    <Row>
      <Col>
        <h2 className="text-center my-5 text-black">Search Task</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form
          className="w-50 mx-auto"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;
