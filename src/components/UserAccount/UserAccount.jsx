import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserAccount = (props) => {
    return (
        <>
            <Card className="text-center h-100 shadow-sm bg-white rounded">
                <Card.Body>
                    <Card.Title>Your Account</Card.Title>
                    <Card.Text>Name: {props.user.name}</Card.Text>
                    <Card.Text>Email: {props.user.email}</Card.Text>
                    <Card.Text>Phone: {props.user.phone}</Card.Text>
                    <Card.Text>Postal Code: {props.user.postalCode}</Card.Text>
                    <Link to="/logout">
                        <Button variant="success">Logout</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default UserAccount;