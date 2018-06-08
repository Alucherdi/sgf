import React from "react"
import "./LoginModal.scss"
import properties from "../Properties"

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
				document.cookie = `user=${data.user.username}`
				document.location.href = "/"
			}
			console.log(data)
		})
	}
	
	render() {
		return (
			<div className="loginModal">
				<div className="head">
					<div>Login</div>
					<div>Sign up</div>
				</div>
				<form onSubmit={this.sendLogin}>
					<input type="text" placeholder="Usuario" name="username"/>
					<input type="password" placeholder="Password" name="password"/>
					<input type="submit" value="Ingresar"/>
				</form>
			</div>
		)
	}
}

export default LoginModal