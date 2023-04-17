import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import FBIcon from "../public/images/fb-logo.svg";
import GoogleIcon from "../public/images/google-logo.svg";
import YPIcon from "../public/images/yp-logo.svg";
import YelpIcon from "../public/images/yelp-logo.svg";
const Footer = () => {
  return (
    <div className="Footer" id="contact-us">
      <Container>
        <Row className="footer-links">
          <Col className="footer-nav">
            <ul className="footer-links">
              <li className="phone-none">
                <Link href="/review-us">Review Us</Link>
              </li>
              <li className="phone-none">
                <Link href="/">Home</Link>
              </li>
              <li className="phone-none">
                <Link href="/services">Services</Link>
              </li>
              <li className="phone-none">
                <Link href="/portfolio">Portfolio</Link>
              </li>

              <li className="phone-none">
                <Link href="/pricing">Pricing</Link>
              </li>

              <li className="phone-none">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col>
            <ul className="socials">
              <li>
                <a href="https://www.facebook.com">
                  <Image
                    priority
                    className="icon fb-icon"
                    src={FBIcon}
                    alt="facebook-icon"
                    width={50}
                    height={50}
                  />
                </a>
              </li>
              <li>
                <a href="http://www.yellowpages.com">
                  <Image
                    priority
                    className="icon yp-icon"
                    src={YPIcon}
                    alt="yellow-pages-icon"
                    width={50}
                    height={50}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.google.com">
                  <Image
                    priority
                    className="icon google-icon"
                    src={GoogleIcon}
                    alt="google-icon"
                    width={50}
                    height={50}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.yelp.com">
                  <Image
                    priority
                    className="icon yelp-icon"
                    src={YelpIcon}
                    alt="yelp-icon"
                    width={50}
                    height={50}
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
