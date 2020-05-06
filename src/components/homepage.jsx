import * as React from "react";
import logo from "../mikeIcon.jpg";
import "../App.scss";
import "../css/homepage.scss";
import HeadBar from "./headbar.jsx";
import { MdArrowForward } from "react-icons/md";
const HomePage = props => {
  const ref = React.createRef();
  const paralaxMove = event => {
    let xPos = event.pageX;
    let yPos = event.pageY;
    event.currentTarget.style.backgroundPosition =
      -xPos / 90 + "px " + -yPos / 200 + "px";
  };
  const handleClick = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return (
    <>
      <div className="background">
        <div className="part-00">
          <div
            id="part-01"
            className="part-01"
            onMouseMove={event => paralaxMove(event)}
          >
            <div className="flex">
              <p className="title">
                <div>I Believe</div>
                <span>Code</span> should bring <span>People</span> together
              </p>
              <p className="title2"></p>
              <div className="buttonBackground">
                <div
                  href="about"
                  className="button"
                  type="button"
                  onClick={() => handleClick()}
                >
                  Let me show you why
                  <span className="arrowIcon">
                    <MdArrowForward className="icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={ref} className="sticky">
          <HeadBar />
        </div>
        <div id="about" className="About-Me">
          <div className="About-Me2">
            <div className="About-Title flex">
              <div>WHY I WRITE CODE</div>
              <div className="title-bar"></div>
            </div>
            <div className="About-Description flex">
              <div className="about-content">
          
                <p className="description-title">Hi, I'm Mike Vance, </p>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  I develop code because I want to help people connect and
                  improve their lives through technology.
                </p>
                <p>
                  I love creating solutions to problems that help bring people
                  together and make their lives easier.
                </p>
                <p>
                  To accomplish this goal, I have learned to use many different
                  tools such as C#, C++, Javascript, React, and much more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
