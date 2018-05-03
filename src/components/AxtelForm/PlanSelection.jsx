import React from "react"

import internetPlanImage from "./Assets/internet.png"
import tvPlanImage from "./Assets/tv.png"

import "./PlanSelection.scss"

class PlanSelection extends React.Component {
	render() {
		var selectOption = (e) => {
			var el = e.currentTarget
			el.classList.add("selected")
			var other = el.nextSibling == null ? el.previousSibling : el.nextSibling
			other.classList.remove("selected")
		}

		return (
			<div className="plan">
				<div className="option shadow" onClick={selectOption}>
					<span className="planTitle">Internet</span>
					<img src={internetPlanImage} alt=""/>
					<span className="planPrice">Desde $449</span>
				</div>
				<div className="option shadow" onClick={selectOption}>
					<span className="planTitle">Internet y TV</span>
					<img src={tvPlanImage} alt=""/>
					<span className="planPrice">Desde $629</span>
				</div>
			</div>
		)
	}
}

export default PlanSelection