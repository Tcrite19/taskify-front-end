import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:3000";
const API = axios.create({
  baseURL: BASE_URL,
});

const initialState = {
  email: "",
  password: "",
};

const LoginPage = ({ login }) => {
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (login && formData.email && formData.password) {
      try {
        login(formData);
      } catch (error) {
        console.error("An error occurred:", error.message);
      }
    }
  }, [login, formData]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form && form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const { email, password } = formData;
        await API.post("/auth/login", { email, password });
        navigate("/dashboard");
      } catch (err) {
        console.error(err);
      }
    }
    setFormData(initialState);
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [target.name]: target.value,
      }));
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form noValidate validated={validated} onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
