import React from "react"
import "./NavBar.scss"

class NavBar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div className="navbar_leftOptions">
					<div className="option">Home</div>
					<div className="option">News</div>
					<div className="option">Axtel</div>
				</div>

				<div className="navbar_rightOptions">
					<div className="option">Ingresar</div>
				</div>
			</div>
		)
	}
}

export default NavBar