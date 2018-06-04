import React from "react"

import { Timeline } from "react-twitter-widgets"

import NavBar from "../NavBar/NavBar.jsx"


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
					<div className="module">
						{this.lastnews()}
						<Timeline
							className="shadow"
							dataSource={{
								sourceType: 'profile',
								screenName: 'SaoraAlucherdi'
							}}
							options={{
								username: 'Alucherdi'
							}}
						/>
					</div>
				</div>
			</div>
		)
	}

	lastnews = () => {
		return (
			<div className="lastNews shadow">
				<h1>Título Noticia</h1>
				<iframe title="newTitle" width="100%" height="315" src="https://www.youtube.com/embed/-TGDmH1SVr0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
			</div>
		)
	}

	blogspot = () => {
		var image = "http://media.esports.eldesmarque.com/wp-content/uploads/2017/12/Rengar_1.jpg"
		var m = []
		for (var i = 0; i < 20; i ++) {
			m.push(
				<div className="blogspot_entry shadow" key={i}>
					<img src={image} alt="" className="blogspot_image" key={i}/>
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