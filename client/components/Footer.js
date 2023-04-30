import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import FBIcon from "../public/images/fb-logo.svg";
import GoogleIcon from "../public/images/google-logo.svg";
import TwitterIcon from "../public/images/Twitter_logo.svg";
import InstagramIcon from "../public/images/Instagram_logo.svg";
const Footer = () => {
  return (
    <div className="Footer">
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
        <hr className="phone-none"></hr>
        <Row>
          <Col>
            <ul className="socials">
              <li>
                <a href="Facebook.com/profile.php?id=100091882991686">
                  <Image
                    priority
                    className="icon fb-icon"
                    src={FBIcon}
                    alt="dream-design-landscaping-facebook-icon"
                    width={50}
                    height={50}
                  />
                </a>
              </li>
              <li>
                <a href="Https://twitter.com/DreamDesign209">
                  <Image
                    priority
                    className="icon twitter-icon"
                    src={TwitterIcon}
                    alt="dream-design-landscaping-twitter-icon"
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
                    alt="dream-design-landscaping-google-icon"
                    width={50}
                    height={50}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <Image
                    priority
                    className="icon insta-icon"
                    src={InstagramIcon}
                    alt="dream-design-landscaping-instagram-icon"
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
