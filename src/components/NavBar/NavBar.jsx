import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" className="brand">TASKIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Welcome" id="basic-nav-dropdown">
            <NavDropdown.Item href="/signup-login">Sign Up/Log In</NavDropdown.Item>
              <NavDropdown.Item href="/tasks">Book a Task</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/account">Account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Sign-Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
