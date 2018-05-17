import React from "react"

import Rocket from "../RocketIntro/Rocket.jsx"
import NavBar from "../NavBar/NavBar.jsx"

class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Rocket />
			</div>
		)
	}
}

export default Home