import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserAccount = (props) => {
  const handleLogout = () => {
    props.logout();
    props.history.push("/users/login");
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="text-center h-100 shadow-sm bg-white rounded">
              <Card.Body>
                <Card.Title>Your Account</Card.Title>
                <Card.Text>Name: </Card.Text>
                <Card.Text>Email: </Card.Text>
                <Card.Text>Phone: </Card.Text>
                <Card.Text>Postal Code: </Card.Text>
                <Card.Text>Address: </Card.Text>
                <Link to="/users/logout">
                  <Button
                    variant="success"
                    className="default-button"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserAccount;
