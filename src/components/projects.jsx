import * as React from 'react';
import "../css/projects.css";
import ProjectCard from "./shared/projectCard.jsx";
import projectArray from "./shared/projectListLocal";
import {withRouter} from "react-router-dom";

const Projects = props=> {
    return(
        <>
        <div className="grid-container">
          {projectArray.map((project, key) => (
            <ProjectCard project={project} key={key} />
          ))}
        </div>
        </>
    );  
};
 export default Projects;