import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.scss";
import { GrOrganization } from "react-icons/gr";
import { MdSchool, MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
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
                <Col md={6} className="education">
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
                              <GrOrganization size={20} />
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

                <Col md={6} className="skills">
                  <h3 className="custom-border d-flex">
                    <span className="icon">
                      <GiSkills />
                    </span>
                    Skills
                  </h3>
                  <div>
                    <div class="d-flex justify-content-center flex-wrap py-md-4">
                      <div class="clearfix">
                        <div class="c100 p80 big">
                          <span>80%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="skillName">React js</p>
                        </div>
                      </div>

                      <div class="clearfix">
                        <div class="c100 p75 big">
                          <span>75%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="skillName">Node js</p>
                        </div>
                      </div>


                      <div class="clearfix">
                        <div class="c100 p65 big">
                          <span>70%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="skillName">DataBase</p>
                        </div>
                      </div>

                    
                      <div class="clearfix">
                        <div class="c100 p88 big">
                          <span>88%</span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="skillName">UI & UX </p>
                        </div>
                      </div>
                    </div>
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
