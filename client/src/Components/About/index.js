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
              <div className="d-flex justify-content-center">
                <div className="img-box">
                  <Image src="../../../assests/images/aboutPic.png" />
                  {/* <img src="https://www.google.com/s2/photos/profile/{danishfayyaz91}"/> */}
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="about-me">
                <h2 className="custom-border">About Me</h2>
                <div class="bio-text">
                  <p>
                    Honestly I am not sure if I can say I am self taught but I
                    didn't had much people around me who were ready to help and
                    guide me. In college, I watched a few courses which were
                    available on LAN. I tried helping a few of my college mates
                    with their projects. Few college fest websites. Learning,
                    things from google, youtube, and stack flow at every step.
                  </p>
                  <p>
                    It was really hard for me to get my first job because
                    everyone needs a person with some professional experience.
                    So, after so many rejections I got my first job as a web
                    developer. For 1 years I’m working as a web developer in a
                    Company wellcreator. I have developed many websites, Mobile
                    apps and apart from that, I have been part of web design
                    projects, office work, and as a freelancer.
                  </p>
                </div>
                <div>
                  <Share />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
