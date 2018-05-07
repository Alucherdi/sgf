import React from "react"
import "./References.scss"

class References extends React.Component {
	render() {
		return (
			<div className="references">
				<form action="" ref-num="0">
					<div className="referenceTitle">Referencia 1</div>
					<input type="text" onKeyUp={this.catchInfo} name="nombre" placeholder="Nombre(s)"/>
					<input type="text" onKeyUp={this.catchInfo} name="apellido" placeholder="Apellido(s)"/>
					<input type="text" onKeyUp={this.catchInfo} name="telefono" placeholder="Teléfono"/>
					<input type="text" onKeyUp={this.catchInfo} name="email" placeholder="Correo electrónico"/>
				</form>
				<br/>
				<form action="" ref-num="1">
					<div className="referenceTitle">Referencia 2</div>
					<input type="text" onKeyUp={this.catchInfo} name="nombre" placeholder="Nombre(s)"/>
					<input type="text" onKeyUp={this.catchInfo} name="apellido" placeholder="Apellido(s)"/>
					<input type="text" onKeyUp={this.catchInfo} name="telefono" placeholder="Teléfono"/>
					<input type="text" onKeyUp={this.catchInfo} name="email" placeholder="Correo electrónico"/>
				</form>
			</div>
		)
	}

	catchInfo = (e) => {
		var el = e.currentTarget
		var refNum = Number(el.parentElement.getAttribute("ref-num"))
		this.props.userDataFiller((prev) => {
			console.log(prev)
			prev.userData.references[refNum][el.getAttribute("name")] = el.value

			console.log(prev.userData.references)
			return prev
		})
	}
}

export default References