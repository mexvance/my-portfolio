import * as React from 'react'
import "../../css/projects.scss";
import aspCMSMainImage from "../../resources/projects/aspCMScard.PNG"

const AspCMS = props =>{
    return(<>
    <div style={{"fontSize":"1.5em"}}>ASP.NET CMS website</div>
    <div ><img src={aspCMSMainImage} alt=""></img></div>
    <div style={{"fontSize":"1em"}}>Page content to come soon!</div>
    <div style={{margin:"1em"}}>For now feel free to visit this project on my Github!</div>
    <div>
    <button className="githubButton" onClick={()=>{window.open("https://github.com/mexvance/CMSWebPageCreator", '_blank')}}>ASP.NET CMS on Github</button>
    </div>
    </>)
}

export default AspCMS