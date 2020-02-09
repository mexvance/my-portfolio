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
      <h1>About Me</h1>
      <img src={logo} className="App-logo" alt="logo"/>
      <p></p>
     

      </div>
      </>
  );
};

export default HomePage;