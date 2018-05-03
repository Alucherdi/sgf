import React from "react"

import PlanSelection from "./PlanSelection"
import Velocity from "./Velocity"
import UserData from "./UserData"
import References from "./References"
import Resume from "./Resume"

import leftImage from "./Assets/leftImage.png"
import rightImage from "./Assets/rightImage.png"

import "./AxtelForm.scss"
import "./Navigation.scss"

class AxtelForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			actualView: 0,
			views: [
				<PlanSelection />,
				<Velocity />,
				<UserData />,
				<References />,
				<Resume />
			]
		}
	}
	
	render() {		
		return (
			<div>
				<div className="axtelForm">
					<div className="left" onClick={() => {this.navigate(-1)}}>
						<img src={leftImage} alt=""/>
					</div>
					{this.state.views[this.state.actualView]}
					<div className="right" onClick={() => {this.navigate(1)}}>
						<img src={rightImage} alt=""/>
					</div>
				</div>

				<div className="axtelResume"></div>
			</div>
		)
	}

	navigate = (offset) => {
		this.setState((prev) => {
			var nextView = prev.actualView + offset
			if (nextView >= 0 && nextView < prev.views.length) {
				return { actualView: nextView }
			} else {
				return {}
			}
		})
	}
}

export default AxtelForm

/* <div className="velocity"></div>
					<div className="userData"></div>
					<div className="references"></div>
					<div className="resume"></div> */