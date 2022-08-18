import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.scss";
import { GrOrganization } from "react-icons/gr";
import {
  MdSchool,
  MdWork,
  MdOutlineDoubleArrow,
  MdEditNote,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "./sass/circle.scss";
import "./css/circle.css";
import { useState } from "react";
const Resume = () => {
  const [portion, setPortion] = useState("service");
  return (
    <div id="resume">
      <div className="resume-background">
        <Container>
          <div className="section ">
            <div className="box-shadow">
              {/* <div>
                <h2>Resume</h2>
              </div> */}

              <a
                href="../../../assests/Muhammad Danish CV.pdf"
                className="learn-more my-2"
                download
              >
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text ">
                  Resume <AiOutlineCloudDownload className="pulse" />
                </span>
              </a>
              <div className="tab-section">
                <Col lg={2} md={3} xs={4}>
                  {portion == "service" && (
                    <h3 className="custom-border py-2 d-flex">
                      <span className="icon">
                        <MdWork />
                      </span>
                      Services
                    </h3>
                  )}
                  {portion == "education" && (
                    <h3 className="custom-border d-flex">
                      <span className="icon">
                        <MdSchool />
                      </span>
                      Education
                    </h3>
                  )}
                  {portion == "experience" && (
                    <h3 className="custom-border py-2 d-flex">
                      <span className="icon">
                        <MdWork />
                      </span>
                      Experience
                    </h3>
                  )}
                </Col>
                <Col md={1} className=" ms-4 d-flex ">
                  {portion != "experience" && (
                    <button
                      className="tab-btn"
                      onClick={() => setPortion("experience")}
                    >
                      Experience <MdOutlineDoubleArrow />
                    </button>
                  )}
                  {portion != "service" && (
                    <button
                      className="tab-btn"
                      onClick={() => setPortion("service")}
                    >
                      Service <MdOutlineDoubleArrow  />
                    </button>
                  )}
                  {portion != "education" && (
                    <button
                      className="tab-btn"
                      onClick={() => setPortion("education")}
                    >
                      Education <MdOutlineDoubleArrow />
                    </button>
                  )}
                </Col>
              </div>

              {portion == "education" && (
                <Row className="mx-md-3 py-md-3">
                  <Col md={6} xs={12} className="education">
                    <div className="box">
                      <div className="heading">
                        <div>
                          <h4 className="degree">
                            Bachelor in Computer Science
                          </h4>
                          <h4 className="school">GCU, Lahore</h4>
                        </div>
                        <div>
                          <div className="duration">
                            <p>2019-23</p>
                          </div>
                        </div>
                      </div>
                      <p className="description">
                        Education is one of the most powerful aspects of life.
                        Education and learning allow us to make sense of the
                        world around us, the world inside of us, and where we
                        fit within the world.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} xs={12} className="education">
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
                        Education is the passport to the future, for tomorrow
                        belongs to those who prepare for it today.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} xs={12} className="education">
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
                        The more that you read, the more things you will know,
                        the more that you learn, the more places you’ll go.
                      </p>
                    </div>
                  </Col>
                </Row>
              )}

              {portion == "experience" && (
                <Row className="mx-md-3 py-md-3">
                  <Col md={6} className="experience">
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
                        For every minute spent organizing, an hour is earned.
                        The only difference between a mob and a trained army is
                        organization.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className="experience">
                    <div className="box">
                      <div className="heading">
                        <div>
                          <h4 className="designation">Internship MERN Stack</h4>
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
                            <p>2021</p>
                          </div>
                        </div>
                      </div>
                      <p className="description">
                        The journey of a thousand miles begins with one step.
                        And I got my first step from here. I learn how to work
                        and manage things professionally.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} xs={12} className="skills">
                    <h3 className="custom-border d-flex">
                      <span className="icon">
                        <GiSkills />
                      </span>
                      Skills
                    </h3>
                    <div className="row my-md-3 mx-md-2 my-4 mx-1">
                      <Col lg={4} md={6} xs={6}>
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
                      <Col lg={4} md={6} xs={6}>
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
                      <Col lg={4} md={6} xs={6}>
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
                      <Col lg={4} md={6} xs={6}>
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

                      <Col lg={4} md={6} xs={6}>
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

                      <Col lg={4} md={6} xs={6}>
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
              )}

              {portion == "service" && (
                <Row className="mx-md-5 service py-md-3">
                  <Col md={6} lg={4}>
                    <div className="service-card card">
                      <div className="circle">
                        <FaReact />
                      </div>

                      <div className="text-center">
                        <h2>React js</h2>
                        <p>
                          Most promising, remarkable, and responsive website
                          using react js technology{" "}
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} lg={4}>
                    <div className="service-card card">
                      <div className="circle">
                        <FaNodeJs />
                      </div>

                      <div className="text-center">
                        <h2>Node js</h2>
                        <p>
                          Appropriate optimized functionality and optimistic
                          error handling using Node js
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} lg={4}>
                    <div className="service-card card">
                      <div className="circle">
                        <SiMongodb />
                      </div>

                      <div className="text-center">
                        <h2>Mongo DB</h2>
                        <p>
                          Flexible, widely supported, powerful querying and
                          analytics DataBase that is also cost-effective.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} lg={4}>
                    <div className="service-card card">
                      <div className="circle">
                        <BsFillPersonCheckFill />
                      </div>

                      <div className="text-center">
                        <h2>Personal Creation</h2>
                        <p>
                          Quick and easy. Essentially just to give you the quick
                          rundown
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} lg={4}>
                    <div className="service-card card">
                      <div className="circle">
                        <MdWork />
                      </div>

                      <div className="text-center">
                        <h2>Case Study</h2>
                        <p>
                          An intensive study about a person, subject, or unit,
                          which is aimed to generalize over several branches.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} lg={4}>
                    <div className="service-card card">
                      <div className="circle">
                        <MdEditNote />
                      </div>

                      <div className="text-center">
                        <h2>Blog Writing</h2>
                        <p>
                          Documenting a particular element. An introduction, the
                          body text, and a conclusion
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
