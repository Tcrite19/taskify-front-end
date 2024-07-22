import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Confirmation from "../Confirmation/Confirmation";
import './CreditCard.css';

const initialState = {
  cardHolderName: "",
  CreditCardNumber: "",
  expiryDate: "",
  cvc: "",
};

const CreditCard = ({ bookTask }) => {
  const { id } = useParams();
  const [paid, setPaid] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (paid) {
      setShowConfirmation(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 7000); 
    }
  }, [paid, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      bookTask(formData);
      setPaid(true);
      setFormData(initialState);
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

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center my-5 text-black">Credit Card Payment</h2>
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
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">
                Please enter your credit card number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExpiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter the expiry date.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCVC">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                type="text"
                placeholder="CVC"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter the CVC.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          {showConfirmation && (
            <div className="d-flex justify-content-center">
              <Confirmation toggle={setShowConfirmation} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CreditCard;
