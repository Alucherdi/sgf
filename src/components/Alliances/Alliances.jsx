import React from "react"
import "./Alliances.scss"

import NavBar from "../NavBar/NavBar";

class Alliances extends React.Component {
	puto() {
		var divTarget = document.getElementById("target")

		console.log(
			divTarget.innerHTML
		)
	}
	
	render() {
		return (
			<React.Fragment>
			<div>
				<NavBar />
				{/* Desde aquí empieza su html */}
				<div id="target">contenido</div>
				<button onClick={this.puto}>Click me</button>
			</div>
			</React.Fragment>
		)
	}
}

export default Alliances