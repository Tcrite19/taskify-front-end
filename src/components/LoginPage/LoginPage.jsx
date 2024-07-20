import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const BASE_URL = "http://localhost:3000";
const API = axios.create({
  baseURL: BASE_URL,
});

const initialState = {
  email: "",
  password: "",
};

const LoginPage = ({LoginPage: login}) => {
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
        try {
            login(formData);
        } catch (error) {
            console.error("An error occurred:", error.message);
        }
    }
  }, [login]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form && form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (login) {
        login(formData);
      }
      setFormData(initialState);
      alert("Login Successful!");
      navigate("/dashboard");
    }
    setValidated(true);
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", formData);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <Container className="login-container">
        <Row>
          <Col>
            <h2 className="text-center my-5 text-black">
              Login to your account
            </h2>
          </Col>
        </Row>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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
              value={formData.password}
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

export default LoginPage;

