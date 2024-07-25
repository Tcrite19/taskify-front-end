import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../../services/apiServices.js";

const initialState = {
  username: "",
  password: "",
};

const LoginPage = ({ setUser }) => {
  const [formData, setFormData] = useState(initialState);
  const [login, setLogin] = useState(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form || form.checkValidity() === false) {
      return;
    }

    try {
      const { username, password } = formData;
      if (!username || !password) {
        throw new Error("Username and password are required");
      }

      const user = await fetchLogin(formData);
      if (!user) {
        throw new Error("Invalid username or password");
      }

      setUser(user);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      let errorMessage =
        "An error occurred while logging in. Please try again later.";
      if (err.message) {
        errorMessage = err.message;
      }
      alert(errorMessage);
    }
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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>username address</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid username address.
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
