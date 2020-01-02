import * as React from "react";
import logo from '../logo.svg';
import '../App.css';

const HomePage = props =>{
  const paralaxMove = event =>{
    let xPos = event.pageX;
    let yPos = event.pageY;
    event.currentTarget.style.backgroundPosition = xPos/4 + "px " + yPos/4 + "px," +
                                                   xPos/12 + "px " + yPos/12 + "px";
  } 

    return(
        <>
        <div className="part-00">
        <div id="part-01" className="part-01" onMouseMove={event=>paralaxMove(event)}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Portfolio, More to come soon!
        </p>
        <a
          className="App-link"
          href="https://github.com/mexvance/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my Github!
        </a>
        </div>
        </div>
        </>
    );
};

export default HomePage;