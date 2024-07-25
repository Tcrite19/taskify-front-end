import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { fetchSignup } from "../../services/apiServices.js";

const initialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  hashedPassword: "",
};

const SignupPage = ({ setUser }) => {
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signup = await fetchSignup(formData);
      setUser(signup);
      navigate("/dashboard");

      setFormData(initialState);
      setValidated(true);

      alert("Your account has been created!");
      if (signup.status === 201) {
        setStatus({ success: true, message: "Account created successfully" });
      } else {
        alert("Error creating account. Please try again.");
        navigate("/users/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  useEffect(() => {
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);

    setinfo({
      id: decoded._id,
      email: decoded.email,
      username: decoded.username,
    });
    setValidated(true);
  }, [formData]);

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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="hashedPassword"
              placeholder="Password"
              name="hashedPassword"
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
