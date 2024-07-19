import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="fw-bold logo">TASKIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tasks">Services</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/task/1">Book a Task</NavDropdown.Item>
              <NavDropdown.Item href="/task/2">My Taskers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/task/3">Account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/task/4">Login</NavDropdown.Item>
              <NavDropdown.Item href="/task/5">Sign-Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
