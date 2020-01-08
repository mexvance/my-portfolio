import * as React from "react";
import '../../css/projects.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ProjectCard = props =>{
    const [isShown, setIsShown] = React.useState(false);
    return(
        <>
        <div className="grid-item" 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={()=>{console.log(`/projects/${props.project[4]}`)}}>
        <div className="projectCard" style={{"backgroundImage":`url(${props.project[3]})`}}>
        </div>
        <TransitionGroup>
        <div className="cardTitle">
            {props.project[0]}
            <br/>
                <CSSTransition
                    in={isShown}
                    timeout={100}
                    classNames="display"
                    unmountOnExit
                    >
                <div className="cardDescription">
                {props.project[1]}
                </div>
                </CSSTransition>
        </div>
        </TransitionGroup>
        <div className="overlay"></div>
        </div>
        
        </>
    );
};

export default ProjectCard;