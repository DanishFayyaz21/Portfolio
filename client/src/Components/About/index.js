import { Container, Row, Col, Image } from "react-bootstrap";
import Share from "../Share";
import "./style.scss";
const About = () => {
  return (
    <div id="About">
      <div className="about-background">
        <Container>
          <Row className="section ">
            <Col md={4}>
              <div className="d-flex justify-content-lg-center">
                <div className="img-box">
                  <Image src="../../../assests/images/about2.png" />
                </div>
                
              </div>
            </Col>
            <Col md={8}>
              <div className="about-me">
                <h2 className="custom-border">About Me</h2>
                <div class="bio-text">
                  <p>
                    For instance, whenever I go back to the guest house during
                    the morning to copy out the contract, these gentlemen are
                    always still sitting there eating their breakfasts. I ought
                    to just try that with my boss; I'd get kicked out on the
                    spot.
                  </p>
                  <p>
                    But who knows, maybe that would be the best thing for me.
                    He'd fall right off his desk! And it's a funny sort of
                    business to be sitting up there at your desk, <br /> talking
                    down at your subordinates. I ought to just try that witht my
                    boss; I'd get kicked out on the spot. But who knows, maybe
                    that would be the best thing for me. He'd fall right off his
                    desk! And it's a funny sort of business to be sitting up
                    there at your desk, talking down at your subordinates.
                  </p>
                </div>
                <Share />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
