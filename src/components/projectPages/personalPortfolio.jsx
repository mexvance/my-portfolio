import * as React from 'react'
import PortfolioMainImage from "../../resources/projects/portfoliocard.PNG"

const PersonalPortfolio = props =>{
    return(<>
    <div style={{"font-size":"1.5em"}}>Personal Portfolio website</div>
    <div ><img src={PortfolioMainImage} alt=""></img></div>
    <div style={{"font-size":"1em"}}>Page content to come soon!</div>
    <div style={{margin:"1em"}}>For now feel free to visit this project on my Github!</div>
    <div>
    <button className="githubButton" onClick={()=>{window.open("https://github.com/mexvance/my-portfolio", '_blank')}}>My-Portfolio on Github</button>
    </div>
    </>)
}

export default PersonalPortfolio