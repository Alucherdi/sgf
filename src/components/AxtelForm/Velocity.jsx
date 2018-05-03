import React from "react"
import "./Velocity.scss"

class Velocity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			velPlans: {
				internet: [

				], tv: [
					{
						id: "basico",
						name: "Básico",
						prices: [
							{mb: 30, prontoPagoPrice: 588, normalPrice: 724},
							{mb: 50, prontoPagoPrice: 735, normalPrice: 837},
							{mb: 200, prontoPagoPrice: 1405, normalPrice: 1607}
						]
					},
					{
						id: "ultra",
						name: "Ultra",
						prices: [
							{mb: 30, prontoPagoPrice: 779, normalPrice: 905},
							{mb: 50, prontoPagoPrice: 1045, normalPrice: 1151},
							{mb: 200, prontoPagoPrice: 1585, normalPrice: 1789}
						]
					},
					{
						id: "total",
						name: "Total HD",
						prices: [
							{mb: 30, prontoPagoPrice: 964, normalPrice: 1140},
							{mb: 50, prontoPagoPrice: 1165, normalPrice: 1260},
							{mb: 200, prontoPagoPrice: 1665, normalPrice: 1860}
						]
					}
				]
			}, selectedPlan: "tv"
		}
	}

	render() {
		
		return (
			<div className="velocity">
				{this.state.velPlans[this.state.selectedPlan].map((velPlan) => {
					return (
						<div className="velocities">
							<div className="velTitle">{velPlan.name}</div>
							<div className="velOptions">
								{velPlan.prices.map((velPrice) => {
									return (
										<div className="planOption shadow">
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
}

export default Velocity