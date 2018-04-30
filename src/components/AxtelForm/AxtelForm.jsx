import React from "react"
import "./AxtelForm.scss"

class AxtelForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			actualView: null,
			selectedPlan: "xtremo"
		}


	}

	render() {
		this.state.actualView = this.velocity()
		return (
			<div>
				<div className="axtelForm center">
					{this.state.actualView}

				</div>
				<div className="axtelResume">
					{this.state.selectedPlan}
				</div>
			</div>
		)
	}

	//Renders:

	plan() {
		var selectPlan = (e) => {
			var el = e.currentTarget
			var options = el.parentElement.getElementsByClassName("option");

			for (var option of options) option.style.backgroundColor = "white"

			el.style.backgroundColor = "#baffcb"

			this.setState({
				selectedPlan: el.getAttribute("plan")
			})
		}

		return (
			<div className="plan">
				<div className="option" onClick={selectPlan} plan="xtremo">
					Internet
					<div className="checkmark"></div>
				</div>

				<div className="option" onClick={selectPlan} plan="tv">
					Internet + TV
					<div className="checkmark"></div>
				</div>
			</div>
		)
	}

	velocity() {
		var plans = {
			xtremo: [
				{
					mb: 20, price: 449
				}, {
					mb: 50, price: 675
				}, {
					mb: 200, price: 1225
				}
			], tv: [
				{
					mb: 20, price: 449
				}, {
					mb: 50, price: 675
				}, {
					mb: 200, price: 1225
				}
			]
		}

		var selectedPlan = plans[this.state.selectedPlan]

		console.log(selectedPlan)

		return (
			<div className="velocity">
				<div className="title">Axtel Xtremo</div>
				<div className="velocities">
					{selectedPlan.map((plan, index) => {
						return (
							<span key={index} className="option shadow">
								<span className="vel">{plan.mb}</span>
								<span className="label">Mbps</span>
							</span>
						)
					})}
				</div>
			</div>
		)
	}


}

export default AxtelForm

/* <div className="velocity"></div>
					<div className="userData"></div>
					<div className="references"></div>
					<div className="resume"></div> */