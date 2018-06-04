import React from "react"
import "./Velocity.scss"

class Velocity extends React.Component {
	constructor(props) {
		super(props)
		var selectedPlan = props.userData.planSelection
		this.state = {
			velPlans: {
				internet: [
					{
						id: "basico",
						name: "Básico",
						prices: [
							{id: 1, mb: 30, prontoPagoPrice: 588, normalPrice: 724},
							{id: 2, mb: 50, prontoPagoPrice: 735, normalPrice: 837},
							{id: 3, mb: 200, prontoPagoPrice: 1405, normalPrice: 1607}
						]
					}
				], tv: [
					{
						id: "basico",
						name: "Básico",
						prices: [
							{id: 1, mb: 30, prontoPagoPrice: 588, normalPrice: 724},
							{id: 2, mb: 50, prontoPagoPrice: 735, normalPrice: 837},
							{id: 3, mb: 200, prontoPagoPrice: 1405, normalPrice: 1607}
						]
					},
					{
						id: "ultra",
						name: "Ultra",
						prices: [
							{id: 1, mb: 30, prontoPagoPrice: 779, normalPrice: 905},
							{id: 2, mb: 50, prontoPagoPrice: 1045, normalPrice: 1151},
							{id: 3, mb: 200, prontoPagoPrice: 1585, normalPrice: 1789}
						]
					},
					{
						id: "total",
						name: "Total HD",
						prices: [
							{id: 1, mb: 30, prontoPagoPrice: 964, normalPrice: 1140},
							{id: 2, mb: 50, prontoPagoPrice: 1165, normalPrice: 1260},
							{id: 3, mb: 200, prontoPagoPrice: 1665, normalPrice: 1860}
						]
					}
				]
			}, selectedPlan: selectedPlan
		}
	}

	render() {
		var selectedVel = this.props.userData.velocitySelection.velId
		var selectedPrice = this.props.userData.velocitySelection.priceId
		
		return (
			<div className="velocity">
				{this.state.velPlans[this.props.userData.planSelection].map((velPlan, _index) => {
					return (
						<div className="velocities" key={velPlan.id}>
							<div className="velTitle">{velPlan.name}</div>
							<div className="velOptions">
								{velPlan.prices.map((velPrice) => {
									return (
										<div key={velPrice.id} className={"planOption shadow " + ((selectedVel === velPlan.id && selectedPrice === velPrice.id) ? 'selected' : '')} 
										onClick={this.selectVelocity} 
										vel-id={velPlan.id} price-id={velPrice.id}
										price-mb={velPrice.mb} price-normal-price={velPrice.prontoPagoPrice}>
											<span className="vel">{velPrice.mb}</span>
											Mbps
										</div>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		)
	}

	selectVelocity = (e) => {
		var el = e.currentTarget
		var allOptions = document.getElementsByClassName("planOption")

		for (var option of allOptions) {
			option.classList.remove("selected")
		}

		el.classList.add("selected")

		var velId = el.getAttribute("vel-id")
		var priceId = el.getAttribute("price-id")
		var priceMb = el.getAttribute("price-mb")
		var priceNormalPrice = el.getAttribute("price-normal-price")

		this.props.userDataFiller((prev) => {
			prev.userData.velocitySelection.velId = velId
			prev.userData.velocitySelection.priceId = priceId
			prev.userData.velocitySelection.priceMb = priceMb
			prev.userData.velocitySelection.priceNormalPrice = priceNormalPrice
			
			return prev
		})
	}
}

export default Velocity