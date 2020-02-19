import * as React from 'react'

import GreenBeanMainImage from "../../resources/projects/greenbeancard.PNG"

const GreenBean = props =>{
    return(<>
    <div style={{"font-size":"1.5em"}}>Green Bean - Desktop Recipe App</div>
    <div ><img src={GreenBeanMainImage} alt=""></img></div>
    <div style={{"font-size":"1em"}}>Page content to come soon!</div>
    <div style={{margin:"1em"}}>For now feel free to visit this project on my Github!</div>
    <div>
    <button className="githubButton" onClick={()=>{window.open("https://github.com/mexvance/Project_GreenBean", '_blank')}}>Project GreenBean on Github</button>
    </div>
    </>)
}

export default GreenBean