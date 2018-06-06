import React from "react"

import LoginModal from "./LoginModal.jsx"

import { Link } from "react-router-dom"

import "./NavBar.scss"

class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoginModalRendering: false,
			isCookieSet: document.cookie.includes("user")
		}
	}
	
	bringModal = (isRendering) => {
		this.setState((prev) => {
			return {
				isLoginModalRendering: !prev.isLoginModalRendering
			}
		})
	}

	updateCookie = () => {
		
	}
	
	render() {
		var loginModal = this.state.isLoginModalRendering ? (<LoginModal />) : (<span></span>)
		var loginButton = this.state.isCookieSet ? (<div className="option">Hi {document.cookie.split("=")[1]}</div>) : (<div className="option" onClick={this.bringModal}>Ingresar</div>)
		return (
			<div className="navbar">
				{loginModal}
				<div className="navbar_leftOptions">
					<Link to="/" className="option">Home</Link>
					<Link to={`${process.env.PUBLIC_URL}/news`} className="option">News</Link>
					<Link to={`${process.env.PUBLIC_URL}/axtel`} className="option">Axtel</Link>
				</div>

				<div className="navbar_rightOptions">
					{loginButton}
				</div>
			</div>
		)
	}
}

export default NavBar