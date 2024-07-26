import { useState, useEffect } from "react";
import "./SignupForm.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/apiServices.js";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState([""]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
  });
  // const [validated, setValidated] = useState(false);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserResponse = await authService.signup(formData);
      props.setUser(newUserResponse.user);
      navigate("/");
    } catch (error) {
      updateMessage(error.message);
    }
  };

  const { username, email, password, passwordConf, firstName, lastName } =
    formData;

  const isFormInvalid = () => {
    return !(
      username &&
      password &&
      password === passwordConf &&
      email &&
      firstName &&
      lastName
    );
  };

  return (
    <>
      <div className="signup-page container">
        <Container className="signup-container">
          <Row>
            <Col>
              <h1 className="text-center my-5 text-black">
                Signup to get started
              </h1>
              <p>{message}</p>
            </Col>
          </Row>
          <Form noValidate className="signup-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>

            <Link to="/">Cancel</Link>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default SignupForm;
