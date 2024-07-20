import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  description: "",
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
