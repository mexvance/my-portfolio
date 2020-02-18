import React from "react"
import {Route} from "react-router"
import AspCMS from "./components/projectPages/aspCMS.jsx";
import GreenBean from "./components/projectPages/greenbean.jsx";
import PersonalPortfolio from "./components/projectPages/personalPortfolio.jsx";
import Pokedex from "./components/projectPages/pokedex.jsx";

const ProjectRoutingComponent = props => {
    return(
    <>
        <Route path="/projects/aspCMS" component={AspCMS}/>
        <Route path="/projects/greenbean" component={GreenBean}/>
        <Route path="/projects/personalPortfolio" component={PersonalPortfolio}/>
        <Route path="/projects/pokedex" component={Pokedex}/>
    </>);
}

export default ProjectRoutingComponent;
