import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.scss";

const Hero = ({ goToContact }) => {

  return (
    <div id="hero" >
    <div className="background">
    <Container>
        <Row className="section">
          <Col md={6} xs={6} className="details">
            <p className="name">I'm Muhammad Danish</p>
            <p className="designation">Software engineer</p>
            {/* <p className="designation">Web Developer</p> */}
            <button onClick={goToContact} class="learn-more smy-2">
              <span class="circle pulse" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Hire me</span>
            </button>
          </Col>
          <Col md={6} xs={6} className="img-section">
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
