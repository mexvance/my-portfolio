import * as React from "react";
import {withRouter} from "react-router-dom";
import '../css/navbar.css'

const NavBar = props =>{
    return(
        <>
            <nav>
            <button 
                onClick={()=>props.history.push('/')}>
                Home
            </button>
            <button 
                onClick={()=>props.history.push('/resume')}>
                My Resume
            </button>
            </nav>
        </>
    );
};

export default withRouter(NavBar);