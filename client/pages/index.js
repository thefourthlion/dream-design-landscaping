import Landing from "../components/Landing";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
export default function Home() {
  return (
    <div className="Home">
      <Landing />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
    </div>
  );
}
