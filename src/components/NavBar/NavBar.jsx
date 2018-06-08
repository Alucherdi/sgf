import React from "react"
import LoginModal from "./LoginModal.jsx"
import { Link } from "react-router-dom"

import UserImage from "./user_image.jpg"

import CookieController from "../../util/cookie.controller";

import "./NavBar.scss"


class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoginModalRendering: false,
			isCookieSet: CookieController.exist("user")
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
		var loginModal = this.state.isLoginModalRendering ? (<LoginModal isLogged={this.state.isCookieSet}/>) : (<span></span>)
		
		var loginButton = this.state.isCookieSet ? 
			(<React.Fragment> 
				<div className="option" onClick={this.bringModal}>
					<img src={UserImage} alt="" className="userImage"/>
				</div>
				<div className="option" onClick={this.bringModal}>
					<span className="userName">{CookieController.get("user")}</span>
				</div>
			</React.Fragment>) : 
			(<div className="option" onClick={this.bringModal}>Ingresar</div>)

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