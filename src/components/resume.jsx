import * as React from "react";
import "../css/about.scss";

const About = props => {
  return (
    <>
      <div className="bodyblock">
        <div className="PageBox">
          <div className="head">Michael Vance</div>
          <div className="mainContent">
            <div className="LeftSideBox">
              <strong>My Languages:</strong>
              <br />
              <br />
              C#
              <br />
              Javascript
              <br />
              React
              <br />
              HTML
              <br />
              CSS
              <br />
              C++
              <br />
              Git
            </div>
            <div className="RightSideBox">More info to come soon!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
