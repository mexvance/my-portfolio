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
            xPos / 5 + "px " + xPos / 25 + "px," +
            -xPos / 20 + "px " + yPos / 5 + "px";
    };
  React.useEffect(() => {
    // do stuff
    return () => {} 
}, [buttonClicked])
  return (
    <>
       <div id="about" className="About-Me">
          <div className="About-Me2">
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
