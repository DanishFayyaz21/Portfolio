import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.scss";
import { GrOrganization } from "react-icons/gr";
import { MdSchool, MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import "./sass/circle.scss";
import "./css/circle.css";
const Resume = () => {
  return (
    <div id="resume">
      <div className="resume-background">
        <Container>
          <div className="section ">
            <div className="box-shadow">
              <div>
                <h2>Resume</h2>
              </div>
              <Row className="mx-md-3 py-md-3">
                <Col md={6} xs={12} className="education">
                  <h3 className="custom-border d-flex">
                    <span className="icon">
                      <MdSchool />
                    </span>
                    Education
                  </h3>
                  <div className="box">
                    <div className="heading">
                      <div>
                        <h4 className="degree">Bachelor in Computer Science</h4>
                        <h4 className="school">GCU, Lahore</h4>
                      </div>
                      <div>
                        <div className="duration">
                          <p>2019-23</p>
                        </div>
                      </div>
                    </div>
                    <p className="description">
                      The goal of cognitive science is to understand the
                      principles of intelligence with the hope that this will
                      lead to better comprehension.
                    </p>
                  </div>

                  <div className="box">
                    <div className="heading">
                      <div>
                        <h4 className="degree">Intermediate(FSC)</h4>
                        <h4 className="school">Govt College, Lahore</h4>
                      </div>
                      <div>
                        <div className="duration">
                          <p>2017-19</p>
                        </div>
                      </div>
                    </div>
                    <p className="description">
                      The goal of cognitive science is to understand the
                      principles of intelligence with the hope that this will
                      lead to better comprehension.
                    </p>
                  </div>

                  <div className="box">
                    <div className="heading">
                      <div>
                        <h4 className="degree">Matriculation</h4>
                        <h4 className="school">
                          Al madrassa secondary school, Lahore
                        </h4>
                      </div>
                      <div>
                        <div className="duration">
                          <p>2015-17</p>
                        </div>
                      </div>
                    </div>
                    <p className="description">
                      The goal of cognitive science is to understand the
                      principles of intelligence with the hope that this will
                      lead to better comprehension.
                    </p>
                  </div>
                  <div className="experience">
                    <h3 className="custom-border py-2 d-flex">
                      <span className="icon">
                        <MdWork />
                      </span>
                      Experience
                    </h3>
                    <div className="box">
                      <div className="heading">
                        <div>
                          <h4 className="designation">
                            Junior MERN Stack Developer
                          </h4>
                          <a
                            href="https://wellcreator.com/"
                            target="_blank"
                            className="organzation"
                          >
                            <span>
                              <GrOrganization className="companyIcon" />
                            </span>{" "}
                            wellcreator
                          </a>
                        </div>
                        <div>
                          <div className="duration">
                            <p>2021-22</p>
                          </div>
                        </div>
                      </div>
                      <p className="description">
                        The goal of cognitive science is to understand the
                        principles of intelligence with the hope that this will
                        lead to better comprehension.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md={6} xs={12} className="skills">
                  <h3 className="custom-border d-flex">
                    <span className="icon">
                      <GiSkills />
                    </span>
                    Skills
                  </h3>
                  <div className="row my-md-5 mx-md-2 my-4 mx-1">
                    <Col md={4} xs={6}>
                      <div className="d-flex flex-column">
                        <div class="c100 p80 align-self-center">
                          <span>80%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <p className="skilltitle">Problem solving</p>
                      </div>
                    </Col>
                    <Col md={4} xs={6}>
                      <div className="d-flex flex-column">
                        <div class="c100 p90 align-self-center">
                          <span>90%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <p className="skilltitle">Visual Thinking</p>
                      </div>
                    </Col>
                    <Col md={4} xs={6}>
                      <div className="d-flex flex-column">
                        <div class="c100 p75 align-self-center">
                          <span>75%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <p className="skilltitle">Communication</p>
                      </div>
                    </Col>
                    <Col md={4} xs={6}>
                      <div className="d-flex flex-column">
                        <div class="c100 p70 align-self-center">
                          <span>70%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <p className="skilltitle">Management Skills.</p>
                      </div>
                    </Col>

                    <Col md={4} xs={6}>
                      <div className="d-flex flex-column">
                        <div class="c100 p85 align-self-center">
                          <span>85%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <p className="skilltitle">Leadership</p>
                      </div>
                    </Col>

                    <Col md={4} xs={6}>
                      <div className="d-flex flex-column">
                        <div class="c100 p85 align-self-center">
                          <span>85%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <p className="skilltitle">Teamwork</p>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
