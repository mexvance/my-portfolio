import * as React from "react";
import "../css/projects.scss";
import ProjectCard from "./shared/projectCard.jsx";
import projectArray from "./shared/projectListLocal";

const Projects = props => {
  return (
    <>
      <div className="projectPageBody">
        <div className="title">Here are some of my recent projects:</div>
        <div className="grid-container">
          {projectArray.map((project, key) => (
            <ProjectCard project={project} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
