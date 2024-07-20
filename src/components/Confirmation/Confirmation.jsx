import { Toast } from 'react-bootstrap';

const Confirmation = ({toggle}) => {
    return (
        <Toast onClose={() => toggle(false)} delay={3000} autohide>
            <Toast.Header>
                <strong className="me-auto">Your Order Has Been Placed</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>Your tasker will be in touch soon. Thank you!</Toast.Body>
        </Toast>
    );
};
export default Confirmation;