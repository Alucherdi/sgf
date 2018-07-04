import React from "react"
import LoginModal from "./LoginModal.jsx"
import "./NavBar.scss"
import CookieController from "../../util/cookie.controller";
import NLI from './assets/Avatar-NotLogged.jpg'
import Avatar1 from './assets/Avatar-1.jpg'
import Logo from './assets/Logo.png'


class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoginModalRendering: false,
<<<<<<< Updated upstream
			isCookieSet: CookieController.exist("user")
=======
			isCookieSet: document.cookie.includes("user"),
			avatar: [Avatar1]
>>>>>>> Stashed changes
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
		var cookie = JSON.parse(CookieController.get("user"));
		var loginButton = this.state.isCookieSet ? (<div className="option hide">Hi {cookie.user}</div>) : (<div className="option hide">Ingresar</div>)
		var avatar = this.state.isCookieSet ? this.state.avatar[cookie.avatar] : NLI
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
				<div className="navbar_leftOptions" value="alliances" onClick={this.goPath}>
					<div className="option" value="axtel">Aliados</div>
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