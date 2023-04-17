import Landing from "../components/Landing";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Portfolio from "../components/Portfolio";
export default function Home() {
  return (
    <div className="Home">
      <Landing />
      <Portfolio />
      <Pricing />
      <Contact />
    </div>
  );
}
