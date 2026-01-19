import { useContext } from "react";
import { Nav, Navbar, Container, NavLink, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
const NavbarSample = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

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
            <Nav.Link
              as={Link}
              to="/location?id=123"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-bold" : ""}`
              }
            >
              Location
            </Nav.Link>
            <Nav.Link
              onClick={handleLogout}
            >
              Logout
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
