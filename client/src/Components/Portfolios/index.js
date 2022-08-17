import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.scss";
import { BsChevronRight } from "react-icons/bs";
const Portfolios = () => {
  return (
    <div id="Portfolio">
      <div className="portfolio-background">
        <Container>
          <div className="section ">
            <div>
              <h2 className="custom-border">Portfolios</h2>
            </div>
            <Row className="mx-md-3 d-flex justify-content-md-center py-md-5">
              <Col lg={3} md={5} xs={6}>
                <div className="portfolio-card">
                  <a
                    className="card-content"
                    href="https://autodeals.pk/"
                    target="_blank"
                  >
                    <div>
                      <Image
                        className="img"
                        src="../../../assests/images/autodeals-logo.png"
                      />
                    </div>
                    <div>
                      <p className="webName">
                        Auto Deals Web <BsChevronRight />
                      </p>
                    </div>
                  </a>
                  <div className="summery">
                    <p>
                      Pakistan's No #1 automobile website. Buy/Sell Used Cars,
                      Bikes, Auto parts, and Car Accessories in Pakistan.You can
                      post a free ad and reach thousands of buyers. This web
                      application built in react js|node js.
                    </p>
                    <h4 className="role">Full Stack functionality</h4>
                    <div className="d-flex my-md-4">
                      <p className="tech">Tech:</p>
                      <span className="tech-circle">React js</span>{" "}
                      <span className="tech-circle">Node js</span>
                      <span className="tech-circle">MySQL</span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={3} md={5} xs={6}>
                <div className="portfolio-card">
                  <a
                    className="card-content"
                    href="https://citybook.pk/"
                    target="_blank"
                  >
                    <div>
                      <Image
                        className="city-img"
                        src="../../../assests/images/City book logo.png"
                      />
                    </div>
                    <div>
                      <p className="webName">
                        CityBook Web <BsChevronRight />
                      </p>
                    </div>
                  </a>
                  <div className="summery">
                    <p>
                      City Book offers latest trends in Pakistan. Explore the
                      fashion, showbiz, celebrities, travel, latest news,
                      business, car prices, health and much more. Almost every
                      kind of professional person can use it with their own
                      perspective.
                    </p>
                    <h4 className="role">Full Stack functionality</h4>
                    <div className="d-flex my-md-4">
                      <p className="tech">Tech:</p>
                      <span className="tech-circle">React js</span>{" "}
                      <span className="tech-circle">Node js</span>
                      <span className="tech-circle">MySQL</span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={3} md={5} xs={6}>
                <div className="portfolio-card">
                  <a
                    className="card-content"
                    href="https://citybook.pk/"
                    target="_blank"
                  >
                    <div>
                      <Image
                        className="city-img"
                        src="../../../assests/images/autodealsjapan.png"
                      />
                    </div>
                    <div>
                      <p className="webName">
                        Auto Deals Japan <BsChevronRight />
                      </p>
                    </div>
                  </a>
                  <div className="summery">
                    <p>
                      Auto Deals Japan is the hub of high-quality Japanese cars,
                      no matter where you are, we deliver vehicles around the
                      globe. We have 30+ car brands inventory for explore.
                    </p>
                    <h4 className="role">Technical & maintenance support</h4>
                    <div className="d-flex my-md-4">
                      <p className="tech">Tech:</p>
                      <span className="tech-circle">React js</span>{" "}
                      <span className="tech-circle">Node js</span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={3} md={5} xs={6}>
                <div className="portfolio-card">
                  <a
                    className="card-content"
                    href="https://beta.destination.pk/"
                    target="_blank"
                  >
                    <div>
                      <Image
                        className="img"
                        src="../../../assests/images/PLAT_LOGO-removebg-preview.png"
                      />
                    </div>
                    <div>
                      <p className="webName">
                        PLAT Lahore <BsChevronRight />
                      </p>
                    </div>
                  </a>
                  <div className="summery">
                    <p>
                      A complete website for the government to customize their
                      services and let their accessibility to thousand of people.
                    </p>
                    <h4 className="role">colaborative working & technical support </h4>
                    <div className="d-flex my-md-4">
                      <p className="tech">Tech:</p>
                      <span className="tech-circle">React js</span>{" "}
                      <span className="tech-circle">Node js</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Portfolios;
