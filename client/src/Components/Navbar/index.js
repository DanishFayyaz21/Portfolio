
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { FiHome, FiGrid, FiPhone, FiClock, FiSettings, FiFilter, FiBold, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import { Accordion } from "react-bootstrap";
import "./Menu.css";


import "./Navbar.scss";
import Share from '../Share';
function NavBarComponent({ hero, about, portfolio, resume, contact }) {
  const [isMenuOpen1, setIsMenuOpen1] = useState();

  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            <Image src="../../../assests/images/d-logo.png" />
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

      <div className='small-image-section'>
        <Link to="/" className="">
          <Image src="../../../assests/images/d-logo.png" />
        </Link>
      </div>

      <Menu right className="burger-menu"
        isOpen={isMenuOpen1} onClose={() => {
          setIsMenuOpen1(false)
        }} onOpen={() => setIsMenuOpen1(true)}
      >
        <div className="px-3 py-5">

          <Link to="/" onClick={() => {
            setIsMenuOpen1(false);
            hero()
          }} className="mt-2 nav-link text-color border-bottom">
            <div className="py-2">
              <FiHome /> &nbsp;  Home
            </div>
          </Link>
          <Link to="/" onClick={() => {
            setIsMenuOpen1(false);
            about()
          }} className="nav-link text-color border-bottom">
            <div className="py-2">
              <BsPerson /> &nbsp;  About
            </div>
          </Link>
          <Link to="/" onClick={() => {
            setIsMenuOpen1(false);
            portfolio()
          }} className="nav-link text-color border-bottom">
            <div className="py-2">
              <FiGrid /> &nbsp; Portfolio
            </div>
          </Link>

          <Link to="/" onClick={() => {
            setIsMenuOpen1(false)
            resume()
          }} className="nav-link text-color border-bottom">
            <div className="py-2">
              <FiGrid /> &nbsp; Resume
            </div>
          </Link>

          <Link onClick={() => {
            setIsMenuOpen1(false)
            contact()
          }} to="/" className="nav-link text-color border-bottom">
            <div className="py-2"><FiPhone /> &nbsp; Contact Us</div>
          </Link>
        </div>
        <div>
          <div className="social-icons w-100 bg-white">
            <Share />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default NavBarComponent;
