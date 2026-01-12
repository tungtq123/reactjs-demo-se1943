import { Nav, Navbar, Container, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarSample = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-bold" : ""}`
              }
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/users"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-bold" : ""}`
              }
            >
              Users
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-bold" : ""}`
              }
            >
              Products
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dashboard">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarSample;
