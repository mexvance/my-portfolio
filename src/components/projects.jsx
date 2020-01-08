import * as React from 'react';
import "../css/projects.css"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/projectList";
import ProjectCard from "./shared/projectCard.jsx"

const Projects = props=> {
    console.log(props)
    return(
        <>
        <div className="grid-container">
        
          {/* {props.recipes.map((recipe, index) => (
            <ProjectCard recipe={recipe} key={index} />
          ))} */}
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
        </>
    );  
};

// const mapStateToProps = state => {
//   return {
//     projects: state.projects
//   };
// };

//  export default connect(
//    mapStateToProps,
//    dispatch => bindActionCreators(actionCreators, dispatch)
//  )(Projects);
 export default Projects;