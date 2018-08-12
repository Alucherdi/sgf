import React from "react"
import "./Alliances.scss"

import NavBar from "../NavBar/NavBar";
import SG_Moon from "./Assets/SG_Moon.png";
import SG_Flag from "./Assets/SG_Flag.png";
import SG_Satellite from "./Assets/SG_Satellite.png";
import LogoArena from "./Assets/logoarena.png";
import LogoGamelta from "./Assets/logogamelta.png";
import LogoGamePlanet from "./Assets/logogameplanet.png";
//import LogoRiot from "./Assets/logoriot.png";
//import LogoXbox from "./Assets/logoxbox.png";
import LogoSpaceGaming from "./Assets/logoSpaceGaming.png";
import LogoRocket9 from "./Assets/rocket9.png";
import Cuadro from "./Assets/cuadro.png";
import Arena from "./Assets/arena.png";
import Gamelta from "./Assets/gamelta.png";
import GamePlanet from "./Assets/gameplanet.png";
import SpaceGaming from "./Assets/SpaceGaming.png";
//import Riot from "./Assets/riot.png";
//import Xbox from "./Assets/xbox.png";
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile
} from "react-device-detect";

class Alliances extends React.Component {

	arenaInfo(){
		var divInfo = document.getElementById("divinfo")
			divInfo.style.display = "block";

		var text = document.getElementById("textinfo")
			text.innerHTML = "Juega dos horas a la semana (ocho horas al mes) en Arena";

		var logo = document.getElementById("logoAliado")
			logo.src = Arena;
	}

	gameltaInfo(){
		var divInfo = document.getElementById("divinfo")
			divInfo.style.display = "block";

		var text= document.getElementById("textinfo")
			text.innerHTML = "Recibe pases para eventos gaming y accesos exclusivos con Gamelta";

		var logo = document.getElementById("logoAliado")
			logo.src = Gamelta;
	}

	gameplanetInfo(){
		var divInfo = document.getElementById("divinfo")
			divInfo.style.display = "block";
			
		var text= document.getElementById("textinfo")
			text.innerHTML = "Recibe saldo para canjear en premios en GamePlanet";

		var logo = document.getElementById("logoAliado")
			logo.src = GamePlanet;
	}

	/*riotInfo(){
		var divInfo = document.getElementById("divinfo")
			divInfo.style.display = "block";
			
		var text= document.getElementById("textinfo")
			text.innerHTML = "Obten riotpoints gratis y otras regalos.";
			
		var logo = document.getElementById("logoAliado")
			logo.src = Riot;
	}

	xboxInfo(){
		var divInfo = document.getElementById("divinfo")
			divInfo.style.display = "block";
			
		var text= document.getElementById("textinfo")
			text.innerHTML = "Descuento en GOLD y muchas sorpresas más.";

		var logo = document.getElementById("logoAliado")
			logo.src = Xbox;
	}*/

	spaceGamingInfo(){
		var divInfo = document.getElementById("divinfo")
			divInfo.style.display = "block";
			
		var text= document.getElementById("textinfo")
			text.innerHTML = "Consigue pase de torneo con premios en cash y en especie por Space Gaming";

		var logo = document.getElementById("logoAliado")
			logo.src = SpaceGaming;
	}

	blankInfo(){
		var divInfo = document.getElementById("divinfo")
			divInfo.style.display = "none";
	}

	//This warranties all the render passed and can access only once
	componentDidMount ()
	{
		var divAnimator = document.getElementById("mainDiv");
		var pos = 0;
		var animation = setInterval(floating, 25);

		function floating()
		{
			pos += 0.025;
			var changeSize = ((20 * Math.sin(1.7952*pos)) + 150).toString() + 'px';
			divAnimator.style.marginTop = changeSize;
			//divAnimator.style.marginTop = "150px";
			
			//divAnimator.style.transform = "rotate(" + (pos*50) + "deg)";
			//divAnimator.style.zIndex = -1;
		}
	}

	render() {
		return (
			<React.Fragment>

			<BrowserView>
			<div className="nav">
				<NavBar />
			</div>

			<div className="bgstar">
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>

				<div className="main" id="mainDiv">

					<div className="moonDiv" id="moonDiv">
						<img className="moon" src={SG_Moon}/>
					</div>

					<div id="noText" onClick={this.blankInfo}>		
					</div>

					<div className="alliesSatellites">
						<img className="satellite_arena" src={SG_Satellite} onClick={this.arenaInfo} />
						<img className="satellite_gamelta" src={SG_Satellite} onClick={this.gameltaInfo} />
						<img className="satellite_gameplanet" src={SG_Satellite} onClick={this.gameplanetInfo} />
						<img className="satellite_spaceGaming" src={SG_Satellite} onClick={this.spaceGamingInfo} />
						

						{/*<img className="logo_arena" src={LogoArena}  />
						<img className="logo_gamelta" src={LogoGamelta}  />
						<img className="logo_gameplanet" src={LogoGamePlanet}  />
						<img className="logo_spaceGaming" src={LogoSpaceGaming}  /> */}
						
					</div>

					<div className="container" id="divinfo">
								<img className="textbox" src={Cuadro} />
								<img className="logoallie" id="logoAliado" />
								<div className="text" id="textinfo"></div>
					</div>
				</div>

			</div>

			{/*<div className="main" id="mainDiv">

				<div className="moonDiv" id="moonDiv">
					<img className="moon" src={SG_Moon}/>
				</div>

				<div className="alliesFlags">
					<img className="flag_arena" src={SG_Flag} />
					<img className="flag_gamelta" src={SG_Flag} />
					<img className="flag_gameplanet" src={SG_Flag} />
					<img className="flag_riot" src={SG_Flag} />
					<img className="flag_rocket9" src={SG_Flag} />
					<img className="flag_xbox" src={SG_Flag} />

					<img className="logo_arena" src={LogoArena} onClick={this.arenaInfo} />
					<img className="logo_gamelta" src={LogoGamelta} onClick={this.gameltaInfo} />
					<img className="logo_gameplanet" src={LogoGamePlanet} onClick={this.gameplanetInfo} />
					<img className="logo_riot" src={LogoRiot} onClick={this.riotInfo} />
					<img className="logo_rocket9" src={LogoRocket9} onClick={this.rocket9Info} />
					<img className="logo_xbox" src={LogoXbox} onClick={this.xboxInfo} />
				</div>

				<div className="container" id="divinfo">
							<img className="textbox" src={Cuadro} />
							<img className="logoallie" id="logoAliado" />
							<div className="text" id="textinfo"></div>
				</div>

			</div>*/}
			</BrowserView>

			<MobileView>
			<div className="nav">
				<NavBar />
			</div>

			<div className="bgstar">
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>

				<div className="main" id="mainDiv">

					<div className="moonDivPhone" id="moonDivPhone">
						<img className="moon" src={SG_Moon}/>
					</div>

					<div id="noTextPhone" onClick={this.blankInfo}>		
					</div>

					<div className="alliesSatellitesPhone">
						<img className="satellite_arenaPhone" src={SG_Satellite} onClick={this.arenaInfo} />
						<img className="satellite_gameltaPhone" src={SG_Satellite} onClick={this.gameltaInfo} />
						<img className="satellite_gameplanetPhone" src={SG_Satellite} onClick={this.gameplanetInfo} />
						<img className="satellite_spaceGamingPhone" src={SG_Satellite} onClick={this.spaceGamingInfo} />
						

						{/*<img className="logo_arena" src={LogoArena}  />
						<img className="logo_gamelta" src={LogoGamelta}  />
						<img className="logo_gameplanet" src={LogoGamePlanet}  />
						<img className="logo_spaceGaming" src={LogoSpaceGaming}  /> */}
						
					</div>

					<div className="containerPhone" id="divinfo">
								<img className="textbox" src={Cuadro} />
								<img className="logoallie" id="logoAliado" />
								<div className="textPhone" id="textinfo"></div>
					</div>
				</div>

			</div>

			{/*<div className="main" id="mainDiv">

				<div className="moonDiv" id="moonDiv">
					<img className="moon" src={SG_Moon}/>
				</div>

				<div className="alliesFlags">
					<img className="flag_arena" src={SG_Flag} />
					<img className="flag_gamelta" src={SG_Flag} />
					<img className="flag_gameplanet" src={SG_Flag} />
					<img className="flag_riot" src={SG_Flag} />
					<img className="flag_rocket9" src={SG_Flag} />
					<img className="flag_xbox" src={SG_Flag} />

					<img className="logo_arena" src={LogoArena} onClick={this.arenaInfo} />
					<img className="logo_gamelta" src={LogoGamelta} onClick={this.gameltaInfo} />
					<img className="logo_gameplanet" src={LogoGamePlanet} onClick={this.gameplanetInfo} />
					<img className="logo_riot" src={LogoRiot} onClick={this.riotInfo} />
					<img className="logo_rocket9" src={LogoRocket9} onClick={this.rocket9Info} />
					<img className="logo_xbox" src={LogoXbox} onClick={this.xboxInfo} />
				</div>

				<div className="container" id="divinfo">
							<img className="textbox" src={Cuadro} />
							<img className="logoallie" id="logoAliado" />
							<div className="text" id="textinfo"></div>
				</div>

			</div>*/}
			</MobileView>

			</React.Fragment>
		)
	}
}

export default Alliances