import React from "react"
import "./UserData.scss"

class UserData extends React.Component {
	render() {
		return (
			<div className="userData">
				<div className="userDataTitle">Información personal</div>
				<form action="">
					<input type="text" onKeyUp={this.catchInfo} name="nombre" placeholder="Nombre(s)"/>
					<input type="text" onKeyUp={this.catchInfo} name="apellido" placeholder="Apellido(s)"/>
					<input type="text" onKeyUp={this.catchInfo} name="fechaNac" placeholder="Fecha de nacimiento (DD/MM/AAAA)"/>
					<input type="text" onKeyUp={this.catchInfo} name="direccion" placeholder="Dirección completa"/>
					<input type="text" onKeyUp={this.catchInfo} name="telefono" placeholder="Teléfono"/>
					<input type="text" onKeyUp={this.catchInfo} name="email" placeholder="Correo electrónico"/>
				</form>
			</div>
		)
	}

	catchInfo = (e) => {
		var el = e.currentTarget
		this.props.userDataFiller((prev) => {
			prev.userData.userInfo[el.getAttribute("name")] = el.value

			return prev
		})
	}
}

export default UserData