import React from "react"
import "./References.scss"

class References extends React.Component {
	render() {
		return (
			<div className="references">
				<form action="">
					<div className="referenceTitle">Referencia 1</div>
					<input type="text" placeholder="Nombre(s)"/>
					<input type="text" placeholder="Apellido(s)"/>
					<input type="text" placeholder="Teléfono"/>
					<input type="text" placeholder="Correo electrónico"/>
				</form>
				<br/>
				<form action="">
					<div className="referenceTitle">Referencia 2</div>
					<input type="text" placeholder="Nombre(s)"/>
					<input type="text" placeholder="Apellido(s)"/>
					<input type="text" placeholder="Teléfono"/>
					<input type="text" placeholder="Correo electrónico"/>
				</form>
			</div>
		)
	}
}

export default References