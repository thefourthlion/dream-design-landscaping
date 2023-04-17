import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Services = () => {
  return (
    <div className="Services" id="services">
      <h1 className="content-header">Store Services</h1>
      <Container className="container">
        <Row>
          <Col md={6} className="service">
            <h1>Seasonal Cleanups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique sapien sit amet diam malesuada, eu ultrices felis
              congue. Quisque lacinia lobortis neque, at sagittis leo semper
              non. Maecenas nec turpis non dui vestibulum suscipit. Vestibulum
              luctus elit at mauris varius, nec auctor velit ultrices.
            </p>
            <a href="tel:+12097704091">
              <button className="primary-btn">Schedule</button>
            </a>
          </Col>
          <Col md={6} className="service">
            <h1>Tree Pruning and Removal</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique sapien sit amet diam malesuada, eu ultrices felis
              congue. Quisque lacinia lobortis neque, at sagittis leo semper
              non. Maecenas nec turpis non dui vestibulum suscipit. Vestibulum
              luctus elit at mauris varius, nec auctor velit ultrices.
            </p>
            <a href="tel:+12097704091">
              <button className="primary-btn">Schedule</button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="service">
            <h1>Tree Work</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique sapien sit amet diam malesuada, eu ultrices felis
              congue. Quisque lacinia lobortis neque, at sagittis leo semper
              non. Maecenas nec turpis non dui vestibulum suscipit. Vestibulum
              luctus elit at mauris varius, nec auctor velit ultrices.
            </p>
            <a href="tel:+12097704091">
              <button className="primary-btn">Schedule</button>
            </a>
          </Col>
          <Col md={6} className="service">
            <h1>Yard Cleaning / Hauling</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique sapien sit amet diam malesuada, eu ultrices felis
              congue. Quisque lacinia lobortis neque, at sagittis leo semper
              non. Maecenas nec turpis non dui vestibulum suscipit. Vestibulum
              luctus elit at mauris varius, nec auctor velit ultrices.
            </p>
            <a href="tel:+12097704091">
              <button className="primary-btn">Schedule</button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Services;
