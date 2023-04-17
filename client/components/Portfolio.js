import React from "react";
import Image from "next/image";
import Img from "../public/images/chainsaw1429x800.webp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="container">
        <Row>
          <Col>
            <div className="image">
              <Image
                priority
                src={Img}
                alt="DDL-portfolio-img"
                width={714}
                height={400}
              />
            </div>
          </Col>

          <Col>
            <div className="information">
              <h1>
                Experience You Can Count On: A Collection of Our Past Projects
              </h1>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Portfolio;
