import React from "react"

import Rocket from "../RocketIntro/Rocket.jsx"
import NavBar from "../NavBar/NavBar.jsx"

import background from "../RocketIntro/background.png"

import "./Home.scss"


class Home extends React.Component {
	render() {
		return (
			<div className="home" style={{backgroundImage: `url(${background})`}}>
				<NavBar />
				<div className="modules">
					<div className="module">
						<div className="blogspot">
						</div>
					</div>
					<div className="module"></div>
				</div>
			</div>
		)
	}
}

export default Home