import * as React from "react";
import logo from '../mikeIcon.jpg';
import '../App.css';
import '../css/homepage.css';
import { MdArrowForward } from "react-icons/md";
const HomePage = props =>{
  const paralaxMove = event =>{
    let xPos = event.pageX;
    let yPos = event.pageY;
    event.currentTarget.style.backgroundPosition = -xPos/4 + "px " + -yPos/4 + "px," +
                                                   xPos/12 + "px " + yPos/12 + "px";
  } 
    return(
        <>
        <div className="part-00">
          <div id="part-01" className="part-01" onMouseMove={event=>paralaxMove(event)}>
            <div className="Header-Title">
              <p className="title">
                Hi, I'm <span>Mike Vance</span> 
              </p>
              <p className="title2">I'm a Software Developer</p>
              <button>
                About Me 
                <span className="arrowIcon">
                  <MdArrowForward/>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="About-Me">
        <p>About Me</p>
        <img src={logo} className="App-logo" alt="logo"/>
        </div>
        </>
    );
};

export default HomePage;