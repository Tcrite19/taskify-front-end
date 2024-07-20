import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phoneNumber: "",
  email: "",
};

const BookingAddress = ({ bookTask }) => {
  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (booked) {
      alert("Thanks for booking!");
    }
  }, [booked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      bookTask(formData);
      setBooked(true);
      setFormData(initialState);
      alert("Thanks for submitting your booking!");
      navigate("/payment");
    }
    setValidated(true);
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  const handleBack = () => {
    navigate("/task");
  };

  const displayError = () => {
    alert("Please enter a name and address.");
  };

  const displaySuccess = () => {
    alert("Thank you for booking with us!");
  };

  const displayConfirmation = () => {
    setBooked(true);
    displaySuccess();
  };

  useEffect(() => {
    if (booked) {
      displayConfirmation();
    }
  }, [booked]);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center my-5 text-black">Booking Address</h2>
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
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Zip Code"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
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

export default BookingAddress;
