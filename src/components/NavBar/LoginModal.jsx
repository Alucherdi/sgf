import React from "react"
import "./LoginModal.scss"
import "./UserConfigModal.scss"
import properties from "../Properties"
import CookieController from "../../util/cookie.controller";
import Logo from '../NavBar/assets/Logo-Alt.png'
import Register from "../Register/Register";

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
			if (data.code === 200) {
				CookieController.add("user", JSON.stringify({
					user: data.user.username,
					avatar: 1
				}))
				document.location.href = "/"
			} else {
				alert("Datos no validos")
			}
		})
	}	
	
	registerModal = () =>{
		var modal = document.getElementById('myModal');
		modal.style.display = "block";
	}

	closeSession = () =>{
		CookieController.remove("user")
		document.location.href = "/"
	}
	
	componentDidMount(){
		var modal = document.getElementById('myModal');
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}		
	}

	render() {
		var toRender = this.props.isLogged ?
		(<div className="userConfigModal">
			<div className="userConfigOption">Perfíl</div>
			<div className="userConfigOption">Membresía</div>
			<div className="userConfigOption">Compras</div>
			<div className="userConfigOption">Ajustes</div>
			<div className="userConfigOption" onClick={this.closeSession}>Cerrar Sesion</div>
		</div>) :
		(
			<div>
				<div id="myModal" class="modal">
					<div class="modal-content">
						<Register/>
					</div>
				</div>
				<div className="loginModal">			
					<img className="logo-img" alt="" src={Logo} width="128"/>
						<form onSubmit={this.sendLogin}>
							<input type="text" placeholder="Usuario" name="username"/>
							<input type="password" placeholder="Contraseña" name="password"/>
							<input type="submit" value="Ingresar"/>
						</form>
						<div className="or">
	  						<span>
    							o
  							</span>
						</div>					
					<button className="social" onClick={this.registerModal}>Registrate</button>
				</div>
			</div>
		)
	return toRender
	}
}

export default LoginModal