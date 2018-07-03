import React from "react"
import LoginModal from "./LoginModal.jsx"
<<<<<<< HEAD
import { Link } from "react-router-dom"

import UserImage from "./user_image.jpg"

import CookieController from "../../util/cookie.controller";

=======
>>>>>>> origin/Alexis
import "./NavBar.scss"
import CookieController from "../../util/cookie.controller";
import Avatar from './assets/Avatar-NotLogged.jpg'
import Avatar1 from './assets/Avatar-1.jpg'
import Logo from './assets/Logo.png'


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

	goPath = (e) =>{
		e.preventDefault();
		var path = e.currentTarget.getAttribute('value');		
		document.location.href = `${process.env.PUBLIC_URL}/${path}`;
	}

	render() {
		var loginModal = this.state.isLoginModalRendering ? (<LoginModal isLogged={this.state.isCookieSet}/>) : (<span></span>)
		var loginButton = this.state.isCookieSet ? (<div className="option hide">Hi {JSON.parse(CookieController.get("user")).user}</div>) : (<div className="option hide">Ingresar</div>)
		var avatar = this.state.isCookieSet ? Avatar1 : Avatar
		return (
			<div className="navbar">
				{loginModal}	
				<a href="/"><img alt="" className="logo" src={Logo} height="48"/></a>
				<div className="navbar_leftOptions" value="news" onClick={this.goPath}>
					<div className="option" value="news">News</div>
				</div>				
				<div className="navbar_leftOptions" value="axtel" onClick={this.goPath}>
					<div className="option" value="axtel">Axtel</div>
				</div>									
				<div className="navbar_rightOptions" onClick={this.bringModal}>
					{loginButton}
					<img alt="" className="avatar" src={avatar} height="48"/>
				</div>				
			</div>
		)
	}
}

export default NavBar