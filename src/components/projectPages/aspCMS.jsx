import * as React from 'react'
import "../../css/projects.css";

const AspCMS = props =>{
    return(<>
    <div style={{"font-size":"1.5em"}}>ASP.NET CMS website</div>
    <div style={{"font-size":"1em"}}>Page content to come soon!</div>
    <div style={{margin:"1em"}}>For now feel free to visit this project on my Github!</div>
    <div>
    <button className="githubButton" onClick={()=>{window.open("https://github.com/mexvance/CMSWebPageCreator", '_blank')}}>ASP.NET CMS on Github</button>
    </div>
    </>)
}

export default AspCMS