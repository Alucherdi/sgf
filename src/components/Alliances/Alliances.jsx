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
import Cuadro from "./Assets/cuadro.png";

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

						<input type="image" onclick="" class="logo_arena" src={LogoArena}/>
						<input type="image" class="logo_gamelta" src={LogoGamelta}/>
						<input type="image" class="logo_gameplanet" src={LogoGamePlanet}/>
						<input type="image" class="logo_riot" src={LogoRiot}/>
						<input type="image" class="logo_rocket9" src={LogoRocket9}/>
						<input type="image" class="logo_xbox" src={LogoXbox}/>

						<div class="container">
							<img class="textbox" src={Cuadro}/>
							<div class="text">Hola Mundo</div>
						</div>
						
				</section>
			</section>

			</React.Fragment>
		)
	}
}

export default Alliances