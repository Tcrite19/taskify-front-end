import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  cardHolderName: "",
  CreditCardNumber: "",
  expiryDate: "",
  cvc: "",
};

const CreditCard = ({ bookTask }) => {
  const [paid, setPaid] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (paid) {
      alert("Thanks for booking!");
    }
  }, [paid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      bookTask(formData);
      setPaid(true);
      setFormData(initialState);
      alert("Your booking is confirmed!");
      navigate("/dashboard");
    }
    setValidated(true);
  };

  const handleChange = ({ target }) => {
    if (target) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [target.name]: target.value,
      }));
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

  useEffect(() => {
    if (paid) {
      displaySuccess();
    }
  }, [paid]);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center my-5 text-black">
            Credit Card Component
          </h2>
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
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCreditCardNumber">
              <Form.Label>Credit Card</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Credit Card Number"
                name="CreditCardNumber"
                value={formData.CreditCardNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExpiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="number"
                placeholder="Expiry Date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCVC">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                type="number"
                placeholder="CVC"
                name="cvc"
                value={formData.cvc}
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

export default CreditCard;

