import React from "react"

import LoginModal from "./LoginModal.jsx"

import { Link } from "react-router-dom"

import "./NavBar.scss"

class NavBar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<LoginModal />
				<div className="navbar_leftOptions">
					<Link to="/" className="option">Home</Link>
					<Link to={`${process.env.PUBLIC_URL}/news`} className="option">News</Link>
					<Link to={`${process.env.PUBLIC_URL}/axtel`} className="option">Axtel</Link>
				</div>

				<div className="navbar_rightOptions">
					<div className="option">Ingresar</div>
				</div>
			</div>
		)
	}
}

export default NavBar