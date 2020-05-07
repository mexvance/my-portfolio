import * as React from "react";
import "../css/about.scss";
import HeroAbout from "./heroContent/heroAbout.jsx";

const About = props => {
  return (
    <>
      <div id="about" className="About-Me">
          <div className="About-Me2">
            <div className="About-Title flex">
              <div>WHY I WRITE CODE</div>
              <div className="title-bar"></div>
            </div>
            <div className="About-Description flex">
              <HeroAbout/>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
