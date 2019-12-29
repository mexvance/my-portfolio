import * as React from "react";
import logo from '../logo.svg';
import '../App.css';

const HomePage = props =>{
    return(
        <>
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
        </>
    );
};

export default HomePage;