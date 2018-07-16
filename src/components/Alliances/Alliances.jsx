import React from "react"
import "./Alliances.scss"

import NavBar from "../NavBar/NavBar";
import SG_Moon from "./Assets/SG_Moon.png";
import SG_Flag from "./Assets/SG_Flag.png";
import LogoArena from "./Assets/logoarena.png";
import LogoGamelta from "./Assets/logogamelta.png";
import LogoGamePlanet from "./Assets/logogameplanet.png";
import LogoRiot from "./Assets/logoriot.png";
import LogoXbox from "./Assets/logoxbox.png";
import LogoRocket9 from "./Assets/rocket9.png";

class Alliances extends React.Component {
	
	render() {
		return (
			<React.Fragment>
			<div class="nav">
				<NavBar />
			</div>
				
			<section class="main">

				<section class="moonWrapper">
						<img class="moon" src={SG_Moon}/>
						
						<img class="flag_arena" src={SG_Flag}/>
						<img class="flag_gamelta" src={SG_Flag}/>
						<img class="flag_gameplanet" src={SG_Flag}/>
						<img class="flag_riot" src={SG_Flag}/>
						<img class="flag_rocket9" src={SG_Flag}/>
						<img class="flag_xbox" src={SG_Flag}/>

						<img class="logo_arena" src={LogoArena}/>
						<img class="logo_gamelta" src={LogoGamelta}/>
						<img class="logo_gameplanet" src={LogoGamePlanet}/>
						<img class="logo_riot" src={LogoRiot}/>
						<img class="logo_rocket9" src={LogoRocket9}/>
						<img class="logo_xbox" src={LogoXbox}/>
				</section>

				<aside class="infoAllied">

				</aside>
			</section>
			</React.Fragment>
		)
	}
}

export default Alliances