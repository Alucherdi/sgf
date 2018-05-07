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
			this.props.userDataFiller((prev) => {
				prev.userData.planSelection = el.getAttribute("plan-type")
				prev.userData.velocitySelection = {}
				return prev
			})
		}

		return (
			<div className="plan">
				<div className={"option shadow " + (this.props.userData.planSelection === 'internet' ? 'selected' : '')} onClick={selectOption} plan-type="internet">
					<span className="planTitle">Internet</span>
					<div className="planInformation">
						<img src={internetPlanImage} alt=""/>
						<span className="planPrice">Desde $449</span>
					</div>
				</div>
				<div className={"option shadow " + (this.props.userData.planSelection === 'tv' ? 'selected' : '')} onClick={selectOption} plan-type="tv">
					<span className="planTitle">Internet y TV</span>
					<img src={tvPlanImage} alt=""/>
					<span className="planPrice">Desde $629</span>
				</div>
			</div>
		)
	}
}

export default PlanSelection