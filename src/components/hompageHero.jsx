import * as React from "react";
import "../css/homepage.scss";
import HeroFirst from "./heroContent/heroFirst.jsx";
import HeroAbout from "./heroContent/heroAbout.jsx";
const HomepageHero = (props) => {
    let backgroundCSS;
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const [buttonHovered, setButtonHovered] = React.useState(false);
    const paralaxMove = event => {
        // let xPos = event.pageX;
        // let yPos = event.pageY;
        // event.currentTarget.style.backgroundPosition =
        //     xPos / 5 + "px " + xPos / 15 + "px," +
        //     -xPos / 20 + "px " + yPos / 5 + "px";
    };
    if (buttonHovered) {
        backgroundCSS = 'part-01 hoveredBG';
    }
    else {
        backgroundCSS = 'part-01 notHoveredBG';
    }
  React.useEffect(() => {
    // do stuff
    return () => {
    } 
}, [buttonClicked])
  return (
    <>
       <div id="about" className="About-Me">
          <div className = "About-Me2">
          <div
            id="part-01"
            className={backgroundCSS}
            //onMouseMove={(event) => paralaxMove(event)}
          >
                     <div className="flex heroContent">
                     Hello I actually don't know where this will go
              {buttonClicked === false ? (<HeroFirst setButtonClicked={setButtonClicked} setButtonHovered={setButtonHovered}/>) : <HeroAbout/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageHero;
