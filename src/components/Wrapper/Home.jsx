import React from "react"

import Rocket from "../RocketIntro/Rocket.jsx"
import NavBar from "../NavBar/NavBar.jsx"

import background from "../RocketIntro/background.png"

import "./Home.scss"

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<NavBar />
				<div className="modules">
					<div className="module">
						<div className="blogspot">
							{this.blogspot().map((blog) => {
								return blog
							})}
						</div>
					</div>
					<div className="module"></div>
				</div>
			</div>
		)
	}

	blogspot = () => {
		var image = "http://media.esports.eldesmarque.com/wp-content/uploads/2017/12/Rengar_1.jpg"
		var m = []
		for (var i = 0; i < 20; i ++) {
			m.push(
				<div className="blogspot_entry shadow">
					<img src={image} alt="" className="blogspot_image"/>
					<h1>Título</h1>
					<p>
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
						Texto del blog Texto del blog Texto del blog 
					</p>
				</div>
			)
		}

		return m
	}
}

export default Home