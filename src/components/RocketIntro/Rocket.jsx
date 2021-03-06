import React from "react"

import background from "./background.png"
import axtelBanner from "./AxtelBanner.png"
import newsBanner from "./NewsBanner.png"
import storeBanner from "./StoreBanner.png"
import rocket from "./rocketGif.gif"
//import banner from "./banner.png"

import "./Rocket.scss"

import { Link } from "react-router-dom"

class Rocket extends React.Component {
	render() {
		return (
			<div>
				<div className="rocketHome" style={{backgroundImage: `url(${background}`}}>
					<div className="title"><img src={rocket} alt=""/></div>

					<div className="options">
						<Link to="/news" className="option" style={{backgroundImage: `url(${newsBanner}`}}>News</Link>
						<Link to="/axtel" className="option" style={{backgroundImage: `url(${axtelBanner}`}}>Axtel</Link>
						<Link to="/" className="option" style={{backgroundImage: `url(${storeBanner}`}}>Store</Link>
					</div>
					
					{/* <div id="banner">
						<img src={banner} alt=""/>
					</div> */}
				</div>
			</div>
		)
	}
}

export default Rocket