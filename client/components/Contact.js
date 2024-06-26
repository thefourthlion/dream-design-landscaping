import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <div className="container">
        <Container>
          <Row className="contact-container">
            <Col>
              <h4>
                Get in Touch: We're here to help with all your landscaping and
                tree work needs! If you have any questions or want to request a
                quote, simply give us a call or send us an email.
              </h4>
            </Col>
            <Col className="buttons">
              <a href="tel:+12094019318">
                <button className="primary-btn">Get Estimate</button>
              </a>
              <a href="tel:+12094019318">
                <button className="primary-btn">Contact Us</button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Contact;
