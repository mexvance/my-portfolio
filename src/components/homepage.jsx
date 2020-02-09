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
    event.currentTarget.style.backgroundPosition = -xPos/4 + "px " + -yPos/4 + "px," +
                                                   xPos/12 + "px " + yPos/12 + "px";
  } 
  const handleClick = () =>{
    ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });;
    // event.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
  };
  return(
      <>
      <div className="part-00">
        <div id="part-01" className="part-01" onMouseMove={ref=>paralaxMove(ref)}>
        
          <div className="Header-Title">
          
            <p className="title">
              Hi, I'm <span>Mike Vance</span> 
            </p>
            <p className="title2">I'm a Software Developer</p>
            <div href="about" className="button" type="button"
            onClick={(event) => handleClick(event)}>
              About Me 
              <span className="arrowIcon">
                <MdArrowForward className="icon"/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="about" ref={ref} className="About-Me">
      <div className="About-Title">
      <h1>About Me</h1>
      </div>
      <img src={logo} className="App-logo" alt="logo"/>
      <div className="About-Description">
      <p>Hi, I'm Mike. I'm a Software Engineer/Developer, skilled in C#, C++, React, and much more.</p>
      <p> I work hard to create clean, professional, functional software and websites.</p>
      </div>

      </div>
      </>
  );
};

export default HomePage;