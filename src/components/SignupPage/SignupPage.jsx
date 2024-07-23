import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const BASE_URL = "http://localhost:3000";
const API = axios.create({
  baseURL: BASE_URL,
});


const initialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  hashedPassword: "",
};

const SignupPage = ({ SignupPage: signup }) => {
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
    if (signup) {
        try {
            signup(formData);
        } catch (error) {
            console.error("An error occurred:", error.message);
        }
    }
}, [signup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form && form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (signup) {
        signup(formData);
      }
      setFormData(initialState);
      alert("Signup Successful!");
      navigate("/login");
    }
    setValidated(true);
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signup-page container">
      <Container className="signup-container ">
        <Row>
          <Col>
            <h2 className="text-center my-5 text-black">
              Signup to your account
            </h2>
          </Col>
        </Row>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.hashedPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignupPage;
