import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react"; // import useContext to grab the context
import { AuthedUserContext } from "../../App"; // import the AuthedUserContext

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  const logoUrl = "../../images/taskify-logo.png";

  return (
    <>
      {user ? (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <div className="logo-container">
              <Link to="/">
                <img
                  href="/"
                  src={logoUrl}
                  className="logo img-fluid"
                  alt="Logo"
                  width="120"
                  height="100"
                />
              </Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signout" onClick={handleSignout}>
                  Sign Out
                </Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Welcome" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/users/signup-login">
                    Sign Up/Log In
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tasks">Services</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/users/signin">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/users/signup">
                    Sign-Up
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <div className="logo-container">
              <Link to="/">
                <img
                  href="/"
                  src={logoUrl}
                  className="logo img-fluid"
                  alt="Logo"
                  width="120"
                  height="100"
                />
              </Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Welcome" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/users/signup-login">
                    Sign Up/Log In{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tasks">Services</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/users/signin">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/users/signup">
                    Sign-Up
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};
export default NavBar;
