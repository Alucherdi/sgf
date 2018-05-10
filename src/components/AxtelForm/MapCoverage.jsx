import React from "react"
import { Gmaps, Marker } from "react-gmaps"

import "./MapCoverage.scss"

var initialPos = {
	lat: 19.404095586762327,
	lng: -99.13544536510835
}

var params = {
	v: "3.exp",
	key: "AIzaSyDdhLyOKHOOfFifNJ7ZHHbzgifW_gb77Fw"
}

class MapCoverage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			initialPos: initialPos, 
			markerPos: initialPos
		}
	}
	
	
	render() {
		return (
			<div className="mapContainer">
				<Gmaps
					width="100%"
					height="100%"
					lat={this.state.initialPos.lat}
					lng={this.state.initialPos.lng}
					zoom={12}
					loadingMessage="Loading"
					params={params}
					onClick={(e) => {
						this.setState({
							markerPos: {
								lat: e.latLng.lat(),
								lng: e.latLng.lng(),
							}
						})
					}}
					//onMapCreated={() => console.log("Map Created")}
					// onClick={(e) => {
					// 	console.log({lat: e.latLng.lat(), lng: e.latLng.lng()})
					// }}
				>
					<Marker
						lat={this.state.markerPos.lat}
						lng={this.state.markerPos.lng}
						radius={500}
					/>
				</Gmaps>
			</div>	
		)
	}
}

export default MapCoverage