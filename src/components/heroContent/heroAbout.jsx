import * as React from "react";
import logo from "../../mikeIcon.jpg";
import { withRouter } from "react-router";

const HeroAbout = (props) => {
  const handleClick = (location) => {
    props.history.push(location);
  };
  return (
    <>
      <div className="about-content">
        <p className="description-title">
          Hi, I'm <span>Mike Vance</span>{" "}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I develop code because I want to help people connect and improve their
          lives through technology.
        </p>
        <p>
          I love creating solutions to problems that help bring people together
          and make their lives easier.
        </p>
        <p>
          To accomplish this goal, I have learned to use many different tools
          such as C#, C++, Javascript, React, and much more. I love learning new 
          tools and finding new ways to make code more elegant and powerful.
        </p>
        <div className="center">
        <div className="buttonBackground">
          <div
            href="about"
            className="button"
            type="button"
            onClick={(location) => handleClick("/projects")}
          >
            Click here to see my recent projects
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(HeroAbout);
