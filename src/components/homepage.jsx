import * as React from "react";
import logo from '../mikeIcon.jpg';
import '../App.css';
import '../css/homepage.css';
import { MdArrowForward } from "react-icons/md";
const HomePage = props =>{
  
  const ref = React.createRef();
  const paralaxMove = event =>{
    let xPos = event.pageX;
    let yPos = event.pageY;
    event.currentTarget.style.backgroundPosition = -xPos/90 + "px " + -yPos/90 + "px";
  } 
  const handleClick = () =>{
    ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
  };
  return(
      <>
      <div className="background">
      <div className="part-00">
        <div id="part-01" className="part-01" onMouseMove={event=>paralaxMove(event)}>
        
          <div className="flex">
          
            <p className="title">
              <span>Code</span> is the glue that binds <span>People</span> together
            </p>
            <p className="title2"></p>
            <div href="about" className="button" type="button"
            onClick={() => handleClick()}>
              Let me show you why
              <span className="arrowIcon">
                <MdArrowForward className="icon"/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="about" ref={ref} className="About-Me">
      <div className="About-Title flex">
      <div>WHY I WRITE CODE</div>
      <div className="title-bar"></div>
      </div>
      <img src={logo} className="App-logo" alt="logo"/>
      <div className="About-Description flex">
      <div className="separator-bar"></div>
      <p>Hi, I'm Mike. I'm a Software Engineer/Developer, skilled in C#, C++, React, and much more.</p>
      <p> I develop code because I want to connect those around me. Code is the way that I can accomplish that goal.</p>
      </div>
      </div>
      </div>
      </>
  );
};

export default HomePage;