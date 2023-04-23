import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import slideOneImage from "../public/images/chainsawing-limb.webp";
import slideTwoImage from "../public/images/hedge-trimming.webp";
import slideThreeImage from "../public/images/weedwhacking_1.webp";
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
              <b>
                Our team has completed numerous landscaping projects over the
                years, including tree removal and pruning, leaf and yard waste
                removal, gutter cleaning and maintenance, hedge trimming, weed
                whacking, pressure washing, custom walkways, deck cleaning and
                staining, and more. We take pride in our attention to detail and
                use only the highest quality materials and equipment to ensure
                our clients are satisfied with the end result. Take a look at
                some of our past projects and see for yourself the level of
                expertise and professionalism we bring to each and every job.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
