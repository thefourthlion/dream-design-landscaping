import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Axios from "axios";
const Pricing = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const sendFormToDb = () => {
    Axios.post("http://localhost:3002/api/clients/create", {
      name: name,
      phone: phone,
      email: email,
      address: address,
      description: description,
      timestamp: date,
    }).then(() => {
      refreshPage();
    });
  };

  return (
    <div className="Pricing">
      <div className="container">
        {/* <Container> */}

        <h1 className="content-header">Pricing That Fits Your Budget</h1>

        <h4>
          We provide top-quality work at an affordable price. Let us know your
          needs and we'll provide customized solutions to fit your budget.
        </h4>

        <button
          className="primary-btn req-a-service-btn"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Request A Service
        </button>

        {showForm && (
          <div className="pricing-container">
            <FloatingLabel className="search-input-label" label="Name">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>

            <FloatingLabel className="search-input-label" label="Phone #">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Phone #"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>

            <FloatingLabel className="search-input-label" label="Email">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>

            <FloatingLabel className="search-input-label" label="Address">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>

            <FloatingLabel
              className="search-input-label"
              label="Job Description"
            >
              <Form.Control
                className="search-input-form-control search-input"
                as="textarea"
                placeholder="Job Description"
                style={{ height: "100px" }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FloatingLabel>

            <button className="primary-btn">Submit Request</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
