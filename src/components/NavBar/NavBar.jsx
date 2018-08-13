import React from "react"
import LoginModal from "./LoginModal.jsx"
import "./NavBar.scss"
import CookieController from "../../util/cookie.controller";
import NLI from '../Assets/Avatar-NotLogged.jpg'
import Avatar1 from '../Assets/Avatar-1.jpg'
import Logo from '../Assets/Logo-Full.png'
import $ from 'jquery'

import Home from './Assets/Home.svg'
import News from './Assets/News.svg'
import Axtel from './Assets/Axtel.png'
import Alliance from './Assets/Alliance.png'
import Gamership from './Assets/Gamership.svg'

class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoginModalRendering: false,
			isCookieSet: CookieController.exist("user"),
			isOpen: true
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

	openSidebar = (e) =>{
		e.preventDefault();
		document.getElementById("sbg").style.display = "inline";
		var element = document.getElementById("bar");
		var sbg = document.getElementById("sbg");
		var navbar = element.classList.contains('active');
		navbar ? (sbg.classList.remove("active")) : sbg.classList.add("active");		
		navbar ? (element.classList.remove("active")) : element.classList.add("active");
	}

	componentDidMount = () =>{
		$(window).on('resize', () => {
			var element = document.getElementById("bar");
			var navbar = element.classList.contains('active');
			if(navbar)
				element.classList.remove("active")
		});
		var sbg = document.getElementById('sbg');
		window.onclick = function(event) {
			if (event.target === sbg) {
				document.getElementById("bar").classList.remove("active")				
				sbg.classList.remove("active")
			}
		}   
	}

	render() {
		var loginModal = this.state.isLoginModalRendering ? (<LoginModal isLogged={this.state.isCookieSet}/>) : (<span></span>)
		var cookie = this.state.isCookieSet ? JSON.parse(CookieController.get("user")) : null;
		var loginButton = this.state.isCookieSet ? (<div className="option hide">Hi {cookie.user}</div>) : (<div className="option hide">Ingresar</div>)
		var avatar = this.state.isCookieSet ? Avatar1 : NLI;
		return (
			<div>

				<div id="sbg" className="m-navbar">
					<div id="bar" className="bar">
						<div className="sidebar">
							<div className="option" value="gamership" onClick={this.goPath}>
								<img alt="" src={Gamership} width="20"/>
								<p>Gamership</p>
							</div>
							<div className="option" value="" onClick={this.goPath}>
								<img alt="" src={Home} width="20"/>
								<p>Home</p>								
							</div>
							<div className="option" value="news" onClick={this.goPath}>
								<img alt="" src={News} width="20"/>
								<p>News</p>
							</div>
							<div className="option" value="axtel" onClick={this.goPath}>
								<img alt="" src={Axtel} width="20"/>
								<p>Axtel</p>
							</div>
							<div className="option" value="aliados" onClick={this.goPath}>
								<img alt="" src={Alliance} width="20"/>
								<p>Aliados</p>
							</div>
							<div className="option" value="buygamership" onClick={this.goPath}>
								<img alt="" src={Gamership} width="20"/>
								<p>Comprar Gamership</p>
							</div>
						</div>
					</div>
				</div>

				<div className="navbar">
					{loginModal}					
					<div className="navbar_leftOptions hide">
						<a href="/"><img alt="" className="logo hide" src={Logo} height="48"/></a>
					</div>
					<div className="navbar_leftOptions " value="gamership" onClick={this.goPath}>
						<div className="option hide" value="gamership">Gamership</div>
					</div>	
					<div className="navbar_leftOptions show" onClick={this.openSidebar}>
						<img alt="" className="secondary show" src={Logo} height="48"/>
					</div>
					<div className="navbar_leftOptions" value="news" onClick={this.goPath}>
						<div className="option hide" value="news">News</div>
					</div>
					<div className="navbar_leftOptions" value="axtel" onClick={this.goPath}>
						<div className="option hide" value="axtel">Axtel</div>
					</div>		
					<div className="navbar_leftOptions " value="alliances" onClick={this.goPath}>
						<div className="option hide" value="alliances">Aliados</div>
					</div>
					<div className="navbar_leftOptions " value="buygamership" onClick={this.goPath}>
						<div className="option hide" value="buygamership">Comprar Gamership</div>
					</div>
					<div className="navbar_rightOptions" onClick={this.bringModal}>
						{loginButton}
						<img alt="" className="avatar" src={avatar} height="48"/>
					</div>					
				</div>
			</div>
		)
	}
}

export default NavBar