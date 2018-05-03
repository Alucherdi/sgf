import React from "react"
import "./UserData.scss"

class UserData extends React.Component {
	render() {
		return (
			<div className="userData">
				<div className="userDataTitle">Información personal</div>
				<form action="">
					<input type="text" placeholder="Nombre(s)"/>
					<input type="text" placeholder="Apellido(s)"/>
					<input type="text" placeholder="Fecha de nacimiento (DD/MM/AAAA)"/>
					<input type="text" placeholder="Dirección completa"/>
					<input type="text" placeholder="Teléfono"/>
					<input type="text" placeholder="Correo electrónico"/>
				</form>
			</div>
		)
	}
}

export default UserData