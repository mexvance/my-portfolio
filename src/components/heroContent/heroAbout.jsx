import * as React from "react";
import logo from "../../mikeIcon.jpg";

const HeroAbout = (props) => {
  return (
    <>
      <div className="about-content">
        <p className="description-title">Hi, I'm <span>Mike Vance</span> </p>
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
          such as C#, C++, Javascript, React, and much more.
        </p>
      </div>
    </>
  );
};
export default HeroAbout;
