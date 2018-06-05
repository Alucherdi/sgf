import React from "react"
import "./LoginModal.scss"

class LoginModal extends React.Component {
	render() {
		return (
			<div className="loginModal">
				<div className="head">
					<div>Login</div>
					<div>Sign up</div>
				</div>
				<form action="">
					<input type="text" placeholder="Usuario"/>
					<input type="password" placeholder="Password"/>
					<input type="submit" value="Ingresar"/>
				</form>
			</div>
		)
	}
}

export default LoginModal