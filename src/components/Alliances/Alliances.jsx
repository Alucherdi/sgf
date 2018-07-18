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
import Arena from "./Assets/arena.png";
import Gamelta from "./Assets/gamelta.png";
import GamePlanet from "./Assets/gameplanet.png";
import Riot from "./Assets/riot.png";
import Xbox from "./Assets/xbox.png";

class Alliances extends React.Component {

	arenaInfo(){
		var divInfo = document.getElementById("divinfo")
			divInfo.style.display = "block";

		var text = document.getElementById("textinfo")
			text.innerHTML = "Accede a horas gratis en Arena.";

		var logo = document.getElementById("logoAliado")
			logo.src = Arena;
	}

	gameltaInfo(){
		var text= document.getElementById("textinfo")
			text.innerHTML = "Asiste a los grandes torneos de videojuegos.";

		var logo = document.getElementById("logoAliado")
			logo.src = Gamelta;
	}

	gameplanetInfo(){
		var text= document.getElementById("textinfo")
			text.innerHTML = "Consigue decuentos para comprar tus videojuegos favoritos.";

		var logo = document.getElementById("logoAliado")
			logo.src = GamePlanet;
	}

	riotInfo(){
		var text= document.getElementById("textinfo")
			text.innerHTML = "Obten riotpoints gratis y otras regalos.";
			
		var logo = document.getElementById("logoAliado")
			logo.src = Riot;
	}

	rocket9Info(){
		var text= document.getElementById("textinfo")
			text.innerHTML = "Equipate con contenido gratuito y especial.";

		var logo = document.getElementById("logoAliado")
			logo.src = LogoRocket9;
	}

	xboxInfo(){
		var text= document.getElementById("textinfo")
			text.innerHTML = "Descuento en GOLD y muchas sorpresas más.";

		var logo = document.getElementById("logoAliado")
			logo.src = Xbox;
	}

	render() {
		return (
			<React.Fragment>
			<div className="nav">
				<NavBar />
			</div>

			<div className="main">

				<section className="moonWrapper">
						<img className="moon" src={SG_Moon}/>
						
						<img className="flag_arena" src={SG_Flag}/>
						<img className="flag_gamelta" src={SG_Flag}/>
						<img className="flag_gameplanet" src={SG_Flag}/>
						<img className="flag_riot" src={SG_Flag}/>
						<img className="flag_rocket9" src={SG_Flag}/>
						<img className="flag_xbox" src={SG_Flag}/>

						<img className="logo_arena" src={LogoArena} onClick={this.arenaInfo}/>
						<img className="logo_gamelta" src={LogoGamelta} onClick={this.gameltaInfo}/>
						<img className="logo_gameplanet" src={LogoGamePlanet} onClick={this.gameplanetInfo}/>
						<img className="logo_riot" src={LogoRiot} onClick={this.riotInfo}/>
						<img className="logo_rocket9" src={LogoRocket9} onClick={this.rocket9Info}/>
						<img className="logo_xbox" src={LogoXbox} onClick={this.xboxInfo}/>

						<div className="container" id="divinfo">
							<img className="textbox" src={Cuadro}/>
							<img className="logoallie" id="logoAliado" />

							<div className="text" id="textinfo"></div>
						</div>
						
				</section>
			</div>

			</React.Fragment>
		)
	}
}

export default Alliances