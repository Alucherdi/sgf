import React from "react"
import moment from "moment"

import PlanSelection from "./PlanSelection"
import Velocity from "./Velocity"
import UserData from "./UserData"

import NavBar from "./../NavBar/NavBar"
//import References from "./References"
//import Resume from "./Resume"
import MapCoverage from "./MapCoverage"

import leftImage from "./Assets/leftImage.png"
import rightImage from "./Assets/rightImage.png"

import internetPlanImage from "./Assets/internet.png"
import tvPlanImage from "./Assets/tv.png"

import "./AxtelForm.scss"
import "./Navigation.scss"

class AxtelForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			actualView: 0,
			views: [],
			userData: {
				planSelection: "internet",
				velocitySelection: {
					velId: "",
					priceId: "",
					priceMb: "",
					priceNormalPrice: ""
				}, 
				userInfo: {
					nombre: "",
					apellido: "",
					fechaNac: moment(),
					direccion: "",
					telefono: "",
					email: ""
				},
				references: [
					{
						nombre: "",
						apellido: "",
						telefono: "",
						email: ""
					},
					{
						nombre: "",
						apellido: "",
						telefono: "",
						email: ""
					}
				]
			}
		}
	}

	userDataFiller = (newData) => {
		this.setState(newData)
		this.refreshUserData()
	}

	refreshUserData = () => {
		this.setState((prev) => {
			var newViews = {
				views: [
					<MapCoverage userDataFiller={this.userDataFiller} userData={prev.userData}/>,
					<PlanSelection userDataFiller={this.userDataFiller} userData={prev.userData}/>,
					<Velocity userDataFiller={this.userDataFiller} userData={prev.userData}/>,
					<UserData userDataFiller={this.userDataFiller} userData={prev.userData}/>,
					//<References userDataFiller={this.userDataFiller} userData={prev.userData}/>
				]
			}

			return newViews
		})
	}

	componentDidMount = () => {
		this.refreshUserData()
	}
	
	render() {	
		var mb = this.state.userData.velocitySelection.priceMb
		var price = this.state.userData.velocitySelection.priceNormalPrice

		return (
			<div>
				<NavBar />
				<div className="axtelbase">
				<div className="axtelForm">
					<div className="left" onClick={() => {this.navigate(-1)}}>
						<img src={leftImage} alt=""/>
					</div>
					<div className="view">
						{this.state.views[this.state.actualView]}
					</div>
					<div className="right" onClick={() => {this.navigate(1)}}>
						<img src={rightImage} alt=""/>
					</div>
				</div>

				<div className="axtelResume">
					<div className="planResume">
						<img src={this.renderPlanImage()} alt=""/>
					</div>
					{price ? 
						<div className="velResume">
							<div className="vel">{mb}Mbps</div>
							<div className="price">${price}</div>
						</div> : 
					""}
					
				</div>
				</div>
			</div>
		)
	}

	renderPlanImage = () => {
		var m = {
			"tv": tvPlanImage,
			"internet": internetPlanImage
		}

		return m[this.state.userData.planSelection]
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