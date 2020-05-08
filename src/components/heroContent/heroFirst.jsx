import * as React from "react";
import { MdArrowForward } from "react-icons/md";
import "../../css/homepage.scss";

const HeroFirst = props => {
    let contentCSS = 'title';
    const handleClick = () => {
        props.setButtonClicked(true);
        props.setButtonHovered(false);
        contentCSS = 'title heroHide'
    };
    const handleHovered = (isHovered) => {
        props.setButtonHovered(isHovered);
    };
    return(
        <>
        <p className={contentCSS}>
                <p>I Believe <span>Code</span> </p>
                <p>should bring <span>People</span> together</p>
              </p>
              <p className="title2"></p>
              <div className="buttonBackground">
                <div
                  href="about"
                  className="button"
                  type="button"
                  onClick={() => handleClick()}
                  onMouseEnter={(isHovered)=> handleHovered(true)}
                  onMouseLeave={(isHovered)=> handleHovered(false)}
                >
                  That is why I develop it
                  <span className="arrowIcon">
                    <MdArrowForward className="icon" />
                  </span>
                </div>
              </div>
        </>
    )
}
export default HeroFirst;