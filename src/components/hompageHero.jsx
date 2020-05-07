import * as React from "react";
import "../css/homepage.scss";
import HeroFirst from "./heroContent/heroFirst.jsx";
import HeroAbout from "./heroContent/heroAbout.jsx";
const HomepageHero = (props) => {

    const [buttonClicked, setButtonClicked] = React.useState(false);
    const paralaxMove = event => {
        let xPos = event.pageX;
        let yPos = event.pageY;
        event.currentTarget.style.backgroundPosition =
            -xPos / 90 + "px " + -yPos / 200 + "px";
    };
  
  return (
    <>
      <div className="background">
        <div className="part-00">
          <div
            id="part-01"
            className="part-01"
            onMouseMove={(event) => paralaxMove(event)}
          >
            <div className="flex heroContent">
              {buttonClicked === false ? (<HeroFirst setButtonClicked={setButtonClicked}/>) : <HeroAbout/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageHero;
