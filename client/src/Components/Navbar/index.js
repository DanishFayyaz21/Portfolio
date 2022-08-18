import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Image } from "react-bootstrap";

import "./Navbar.scss";
function NavBarComponent({ hero, about, portfolio, resume, contact }) {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <Image src="../../../assests/images/d-logo.png" />
          {/* <h1>Danish</h1> */}
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id=" navbarScroll">
          <Nav
            className="ms-auto stroke my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/"
              onClick={hero}
              className="nav-link active"
            >
              Home
            </Link>
            <Link to={"/"}
              onClick={about} className="nav-link">
              About
            </Link>
            <Link to="/" onClick={portfolio} className="nav-link">
              Portfolio
            </Link>

            <Link to="/" onClick={resume} className="nav-link">
              Resume
            </Link>
            <Link to="/" onClick={contact} className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
