import React from "react"
import background from "./background.png"
import banner from "./banner.png"
import "./Rocket.scss"

class Rocket extends React.Component {
	render() {
		return (
			<div>
				<div className="home" style={{backgroundImage: `url(${background}`}}>
					<div className="title">Space Gaming</div>

					<div className="options">
						<div className="option">News</div>
						<div className="option">Axtel</div>
						<div className="option">Store</div>
					</div>
					
					<div id="banner">
						<img src={banner} />
					</div>
				</div>
			</div>
		)
	}
}

export default Rocket