import React from "react"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import "./UserData.scss"

class UserData extends React.Component {
	render() {
		return (
			<div className="userData">
				<div className="userDataTitle">Información personal</div>
				<form action="">
					<input type="text" onKeyUp={this.catchInfo} defaultValue={this.props.userData.userInfo.nombre} name="nombre" placeholder="Nombre(s)"/>
					<input type="text" onKeyUp={this.catchInfo} defaultValue={this.props.userData.userInfo.apellido} name="apellido" placeholder="Apellido(s)"/>
					<DatePicker
						selected={this.props.userData.userInfo.fechaNac}
						showYearDropdown
						showMonthDropdown
						dropdownMode="select"
						onChange={this.changeDate}
						//className="datePicker"
					/>
					<input type="text" onKeyUp={this.catchInfo} defaultValue={this.props.userData.userInfo.telefono} name="telefono" placeholder="Teléfono"/>
					<input type="text" onKeyUp={this.catchInfo} defaultValue={this.props.userData.userInfo.email} name="email" placeholder="Correo electrónico"/>
				</form>
			</div>
		)
	}

	changeDate = (date) => {
		this.props.userDataFiller((prev) => {
			prev.userData.userInfo.fechaNac = date
			return prev
		})
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