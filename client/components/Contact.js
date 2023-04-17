import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="container">
        <Container>
          <Row>
            <Col>
              <h4>
                Get in Touch: We're here to help with all your landscaping and
                tree work needs! If you have any questions or want to request a
                quote, simply give us a call or send us an email.
              </h4>
              <button className="primary-btn">Get Estimate</button>
              <button className="primary-btn">Contact Us</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Contact;
