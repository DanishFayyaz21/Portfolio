import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.scss";
const Hero = () => {
  return (
    <div id="hero" >
    <div className="background">
    <Container>
        <Row className="section">
          <Col md={6} className="details">
            <p className="name">I'm Muhammad Danish</p>
            <p className="designation">Web Developer</p>
            {/* <div className="hire-section">
              <div className="pill">
                <div className="circle"></div>
                <p>Hire me</p>
              </div>
            </div> */}
            <button class="learn-more my-2">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Hire me</span>
            </button>
          </Col>
          <Col md={6} className="img-section">
            <div className="img-box">
              <Image src="../../../assests/images/hero-img2.jpeg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  
    </div>
  );
};

export default Hero;