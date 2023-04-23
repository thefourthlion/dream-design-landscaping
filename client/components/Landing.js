// import cityVideo from "../public/images/forest.mp4";
import Img from "../public/images/bark.jpg";

import ReactPlayer from "react-player";
const Landing = () => {
  return (
    <div className="Landing">
      <div className="img">
        {/* <ReactPlayer url={cityVideo} /> */}
        {/* <video src={cityVideo} type="video/mp4" autoPlay loop muted /> */}
        <div className="landing-info">
          <h1>Beautiful landscapes, expertly designed</h1>

          <a href="tel:+12094019318">
            <button className="primary-btn">Get A Quote</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
