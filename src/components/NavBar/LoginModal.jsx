import React from "react"
import "./LoginModal.scss"
import "./UserConfigModal.scss"
import properties from "../Properties"
import CookieController from "../../util/cookie.controller";

class LoginModal extends React.Component {	
	
	sendLogin = (e) => {
		e.preventDefault()
		var formData = new FormData(e.currentTarget)

		var params = {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				username: formData.get("username"), 
				password: formData.get("password")
			})
		}
		
		fetch(properties.services.login, params).then(r => r.json()).then(data => {
			if (data.code == 200) {
				CookieController.set("user", data.user.username)
				document.location.href = "/"
			} else {
				alert("Datos no validos")
			}
			console.log(data)
		})
	}
	
	render() {
		var toRender = this.props.isLogged ?
			(<div className="userConfigModal">
				<div className="userConfigOption">Perfíl</div>
				<div className="userConfigOption">Membresía</div>
				<div className="userConfigOption">Compras</div>
				<div className="userConfigOption">Ajustes</div>
			</div>) :
			(<div className="loginModal">
				<div className="head">
					<div>Login</div>
					<div>Sign up</div>
				</div>
				<form onSubmit={this.sendLogin}>
					<input type="text" placeholder="Usuario" name="username"/>
					<input type="password" placeholder="Password" name="password"/>
					<input type="submit" value="Ingresar"/>
				</form>
			</div>)
		return toRender
	}
}

export default LoginModal