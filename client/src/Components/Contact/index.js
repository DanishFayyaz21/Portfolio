import { Container, Row, Col, Form } from "react-bootstrap";
import { GET, POST } from "../../apicontroller/ApiController.js";
import { MdPhoneAndroid, MdLocationPin } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Share from "../Share";
import "./style.scss";
import { useEffect } from "react";

const Contact = () => {
  const formdata={
    name:"fayyaz",
    email:"danisd2100@gmail.com",
    phone:"928987598798", 
    subject:"web developer",
    message:"shdkahkahj"
}
  useEffect(()=>{
    const result = POST("contact",formdata);
  },[])
  return (
    <div id="contact">
      <div className="about-background">
        <Container>
          <div className="section ">
            <div className="contact-me">
              <h2 className="custom-border">Contact Me</h2>
              <h3>Minding a business? let's make it!</h3>
            </div>
            <Row className="my-md-5 mx-md-3">
              <Col md={4}>
                <div className="contact-details">
                  <div className="contact-card">
                    <div className="contact-circle">
                      <MdPhoneAndroid />
                    </div>
                    <div className="details">
                      <h4>Call me</h4>
                      <p>+92-342-0699570</p>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-circle">
                      <AiOutlineMail />
                    </div>
                    <div className="details">
                      <h4>Email Us</h4>
                      <p>danishfayyaz21@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-circle">
                      <MdLocationPin />
                    </div>
                    <div className="details">
                      <h4>Address</h4>
                      <p>104, 24-B Haji qamardeen</p>
                    </div>
                  </div>
                </div>
                <div className="mx-md-3">
                  <Share />
                </div>
              </Col>
              <Col md={8}>
                <Form className="contact-form">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress1"
                    >
                      <Form.Control type="text" placeholder="Your Phone" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress2"
                    >
                      <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        rows={7}
                        placeholder="Your message here"
                      />
                    </Form.Group>
                  </Row>

                  <div className="d-flex justify-content-end my-md-5">
                    <button class="learn-more my-2">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Submit</span>
                    </button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
