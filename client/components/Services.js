import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Services = () => {
  return (
    <div className="Services" id="services">
      <h1 className="content-header">Landscaping Services</h1>
      <Container className="container">
        <Row>
          <Col md={6} className="service">
            <h2>Tree Removal and Pruning</h2>
            <p>
              We offer expert tree removal and pruning services to maintain the
              safety and health of your outdoor space. We use modern equipment
              and techniques to safely remove trees or prune branches that are
              diseased or pose a hazard to your property.
            </p>
            <a href="tel:+12094019318">
              <button className="primary-btn">Schedule</button>
            </a>
          </Col>
          <Col md={6} className="service">
            <h2>Leaf and Yard Waste Removal</h2>
            <p>
              Don't let yard waste detract from the beauty of your outdoor
              space. Our professional leaf and yard waste removal services will
              keep your property looking clean and inviting all year round. From
              seasonal contracts to on-demand debris removal we have you
              covered.
            </p>
            <a href="tel:+12094019318">
              <button className="primary-btn">Schedule</button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="service">
            <h2>Gutter Cleaning and Maintenance</h2>
            <p>
              Ensure the safety and longevity of your home with our professional
              gutter cleaning and maintenance services. Our team will ensure
              that your gutters are clear and functioning properly, protecting
              your property from water damage.
            </p>
            <a href="tel:+12094019318">
              <button className="primary-btn">Schedule</button>
            </a>
          </Col>
          <Col md={6} className="service">
            <h2>Deck Cleaning and Staining</h2>
            <p>
              Protect your deck from the elements and keep it looking great with
              our expert cleaning and staining services. We'll remove any
              buildup of dirt or grime and apply a high-quality stain to enhance
              the natural beauty of your deck.
            </p>
            <a href="tel:+12094019318">
              <button className="primary-btn">Schedule</button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Services;
