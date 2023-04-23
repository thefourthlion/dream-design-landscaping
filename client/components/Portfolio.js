import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import slideOneImage from "../public/images/chainsaw1429x800.webp";
import slideTwoImage from "../public/images/chainsaw1429x800.webp";
import slideThreeImage from "../public/images/chainsaw1429x800.webp";
import Img from "../public/images/chainsaw1429x800.webp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="img">
        <div className="container">
          <div className="carousel-container">
            <Carousel className="carousel">
              <Carousel.Item>
                <Image
                  className="carousel-img"
                  src={slideOneImage}
                  alt="Slide One"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="carousel-img"
                  src={slideTwoImage}
                  alt="Slide Two"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="carousel-img"
                  src={slideThreeImage}
                  alt="Slide Three"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="information">
            <h1>
              Experience You Can Count On: A Collection of Our Past Projects
            </h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
