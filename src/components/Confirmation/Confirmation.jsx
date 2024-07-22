import "./Confirmation.css";
import { Toast } from "react-bootstrap";


const Confirmation = ({ toggle }) => {
  return (
    <>
      <Toast
        className="confirmation"
        show={true}
        onClose={() => toggle(false)}
        delay={7000}
        autohide
      >
        <Toast.Header className="text-bg-success">
          <strong className="me-auto">Your Order Has Been Placed</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Your tasker will be in touch soon. Thank you!</Toast.Body>
      </Toast>
      
    </>
  );
};

export default Confirmation;
