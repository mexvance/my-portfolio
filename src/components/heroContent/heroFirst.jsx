import * as React from "react";
import { MdArrowForward } from "react-icons/md";
import "../../css/homepage.scss";

const HeroFirst = props => {
    const handleClick = () => {
        props.setButtonClicked(true);
    };
    return(
        <>
        <p className="title">
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