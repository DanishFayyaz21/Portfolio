import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Image } from "react-bootstrap";

import "./Navbar.scss";
function NavBarComponent() {
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
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="nav-link active"
            >
              Home
            </Link>
            <Link to={"/"}
                onClick={() => {
                  window.scrollTo({ top: 900, left: 0, behavior: "smooth" });
                }} className="nav-link">
              About
            </Link>
            <Link to="/"  onClick={() => {
                  window.scrollTo({ top: 1700, left: 0, behavior: "smooth" });
                }} className="nav-link">
              Portfolio
            </Link>
          
            <Link to="/"  onClick={() => {
                  window.scrollTo({ top: 2630, left: 0, behavior: "smooth" });
                }} className="nav-link">
              Resume
            </Link>
            <Link to="/"  onClick={() => {
                  window.scrollTo({ top: 3900, left: 0, behavior: "smooth" });
                }} className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
