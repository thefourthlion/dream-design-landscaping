import "../styles/Footer.scss";
import "../styles/Contact.scss";
import "../styles/Pricing.scss";
import "../styles/Portfolio.scss";
import "../styles/Services.scss";
import "../styles/Landing.scss";
import "../styles/Navbar.scss";
import "../styles/globals.scss";
import "../styles/index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
