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
            <Row className="mx-md-3 py-md-5">
              <Col md={3}>
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
                        Auto Deals Web  <BsChevronRight />
                      </p>
                    </div>
                  </a>
                  <div className="summery">
                    <p>
                      summery For instance, whenever I go back to the guest
                      house during the morning to copy out the contract, these
                      gentlemen are always still sitting there eating their
                      breakfasts.
                    </p>
                    <h4 className="role">Role of Work</h4>
                    <div className="d-flex my-md-4">
                      <p className="tech">Tech:</p>
                      <span className="tech-circle">React js</span>{" "}
                      <span className="tech-circle">Node js</span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={3}>
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
                      summery For instance, whenever I go back to the guest
                      house during the morning to copy out the contract, these
                      gentlemen are always still sitting there eating their
                      breakfasts.
                    </p>
                    <h4 className="role">Role of Work</h4>
                    <div className="d-flex my-md-4">
                      <p className="tech">Tech:</p>
                      <span className="tech-circle">React js</span>{" "}
                      <span className="tech-circle">Node js</span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={3}>
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
                        Auto Deals Japan  <BsChevronRight />
                      </p>
                    </div>
                  </a>
                   <div className="summery">
                    <p>
                      summery For instance, whenever I go back to the guest
                      house during the morning to copy out the contract, these
                      gentlemen are always still sitting there eating their
                      breakfasts.
                    </p>
                    <h4 className="role">Role of Work</h4>
                    <div className="d-flex my-md-4">
                      <p className="tech">Tech:</p>
                      <span className="tech-circle">React js</span>{" "}
                      <span className="tech-circle">Node js</span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={3}>
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
                      summery For instance, whenever I go back to the guest
                      house during the morning to copy out the contract, these
                      gentlemen are always still sitting there eating their
                      breakfasts.
                    </p>
                    <h4 className="role">Role of Work</h4>
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
