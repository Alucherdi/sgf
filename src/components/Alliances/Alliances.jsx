import React from "react"
import "./Alliances.scss"

import NavBar from "../NavBar/NavBar";
import SG_Moon from "./Assets/SG_Moon.png";
import SG_Flag from "./Assets/SG_Flag.png";

class Alliances extends React.Component {
	
	render() {
		return (
			<React.Fragment>
			<section class="wrapper">
				<section class="main">

				<div class ="navBarDiv">
						<NavBar />
				</div>

					<div class="divWrapper">
						<img class="moon" src={SG_Moon} />
						<img class="flag_arena" src={SG_Flag} />
						<img class="flag_gamelta" src={SG_Flag} />
						<img class="flag_gameplanet" src={SG_Flag} />
						<img class="flag_riot" src={SG_Flag} />
						<img class="flag_rocket9" src={SG_Flag} />
						<img class="flag_xbox" src={SG_Flag} />
					</div>

				</section>
			</section>
			</React.Fragment>
		)
	}
}

export default Alliances