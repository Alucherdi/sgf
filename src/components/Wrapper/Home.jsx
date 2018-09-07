import React from "react"
import { Timeline } from "react-twitter-widgets"
import NavBar from "../NavBar/NavBar.jsx"
import "./Home.scss"
import Carousel  from "../Carousel/Carousel";

class Home extends React.Component {
	render() {
		return (
			<div className="home">						
				<div className="modules">					
					<div className="module">
						<div className="carousel">
							<Carousel/>					
						</div>
						<div className="blogspot">
							{this.blogspot().map((blog) => {
								return blog
							})}
						</div>
					</div>
					<div className="module">
						{this.lastnews()}
						<Timeline
							className="shadow"
							dataSource={{
								sourceType: 'profile',
								screenName: 'GamershipMX'
							}}
							options={{
								username: 'GamershipMX'
							}}
						/>
					</div>
				</div>
				<NavBar/>						
			</div>
		)
	}

	lastnews = () => {
		return (
			<div className="lastNews shadow">
				<h1>Rainbox Six Siege</h1>
				<iframe title="newTitle" width="100%" height="220" src="https://www.youtube.com/embed/-TGDmH1SVr0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
			</div>
		)
	}

	blogspot = () => {		
		var m = []
		m.push(				
			<div className="blogspot_entry shadow" key={0}>
				<img src="http://www.borntoplay.es/wp-content/uploads/2018/01/supernintendo-snes-nintendo-retro-videojuegos-snes-mini-borntoplay.jpg" alt="" className="blogspot_image"/>
				<h1>RETRO: EL PASADO ES PARTE DEL FUTURO</h1>
				<p>
				El videojuego ha progresado, la forma de jugar ha evolucionado y el concepto de jugador también ha cambiado. La tecnología se desarrolla a buen ritmo y resulta apasionante recordar como eran los videojuegos hace 25 años para después situarnos en pleno 2018 y analizar, por ejemplo, las posibilidades que ahora ofrece una videoconsola, no solo a nivel de_hardware_, también el concepto social y de comunidad_online_con el que se ha visto reforzada la industria y donde la modalidad multijugador es la segunda cabeza de un gran monstruo dispuesto a devorar en su mejor momento un hueso duro de roer; la realidad virtual.
				Estos días es muy habitual encontrar multitud de artículos donde se recogen los juegos y las diferentes propuestas tecnológicas más esperadas del sector para este año cuyo precinto acabamos de rasgar. Medios comoTegusta.espresentansu propia lista con los videojuegosmás esperados dePS4para 2018.
				Obras representativas de esta última etapa como Uncharted 4, The Legend of Zelda: Breath of the Wild y Horizon: Zero Dawn son buenos ejemplos para ilustrar el punto técnico y artístico al que ha llegado el videojuego actual. Impacientes estamos por conocer las sorpresas que nos depara este largo año que tenemos por delante.
				</p>
			</div>
		)		
		m.push(				
			<div className="blogspot_entry shadow" key={1}>
				<img src="http://www.borntoplay.es/wp-content/uploads/2018/04/videojuegos-reportajes-videojuegos-2018-partidas-memoria-videjuegos-consolas-nueva-generaci%C3%B3n-sony-microsoft-PS5.jpg" alt="" className="blogspot_image"/>
				<h1>RELATO: LA PARTIDA PERDIDA</h1>
				<p>
				Todo jugador lo ha experimentado alguna vez en su vida. Incluso en más de una ocasión. De hecho, aquellos que religiosamente militamos este entretenimiento es como si estuviéramos condenados a padecer la misma tragedia, al menos, una vez por generación, con cada consola que ha pasado por nuestras sudorosas y encallecidas manos. Una especie de maldición que antes o después siempre se repite con el fatal añadido de que a menudo se ven implicados videojuegos muy concretos, aquellos que requieren de una ardua y especial dedicación.
				Es una sensación de vacío horripilante que solamente alcanzan a entender aquellos que lo han experimentado en sus propias carnes. Resulta habitual recordar esa primera vez, de hecho, siempre es la misma sensación, la misma dosis de impotencia y rabia, una especie de fotocopia que al sucederse una vez más replica en nuestra mente aquellos casos más dolorosos que padecimos en el pasado.
				A estas alturas muchos ya sabrán de qué estoy hablando, para aquellos que aún no sepan por dónde van los tiros lo resumo con rápidos ejemplos: “partida no encontrada “, “ no existen datos “ o ” _fallo al leer la tarjeta de memoria _”
				</p>
			</div>
		)	
		m.push(				
			<div className="blogspot_entry shadow" key={2}>
				<img src="http://www.borntoplay.es/wp-content/uploads/2018/03/dukenukem3d-3D-realms-retro-juegos-retro-shooters-clasicos-videojuegos-antiguos-1.jpg" alt="" className="blogspot_image"/>
				<h1>I LOVE: DUKE NUKEM 3DA</h1>
				<p>
				Los Ángeles… al borde de la destrucción total… y con ella, toda la humanidad. Hollywood es el lugar donde nacen las estrellas pero ahora lo único que puedes conseguir inmortalizar en el Paseo de la Fama es tu propio cuerpo.
				Primero fue el Doctor Protón con su legión de robots cobardes, luego los Rigaltins y sus Ordenadores X5G de guerra. Al infierno con todos ellos. Después de todo aquello, al regresar, alguien dispara contra la nave espacial deDukey este se ve forzado a realizar un salto de emergencia. La invasión alienígena ha comenzado, los policías de la ciudad han mutado y los invasores están raptando a las mujeres. Es la oportunidad perfecta para ensuciar todas las callejuelas con las entrañas de las fuerzas reptiles, los mutantes polis cerdos, y los monstruosos octabrains, todo ello en una notable y tremenda lucha por derrotar a las maquiavélicas fuerzas invasoras que pretenden destruir la Madre Tierra y acabar con sus abundantes reservas. ¡SAL A POR ELLOS! Destruye a los Freakazoids como si no hubiera un mañana. Caos y destrucción durante 30 niveles cargados de acción, socarronería noventera y algunas_streapers_. ¡Viva el Rey! Nena… ¡Es hora de marcha!
				</p>
			</div>
		)		
		m.push(				
			<div className="blogspot_entry shadow" key={3}>
				<img src="http://www.borntoplay.es/wp-content/uploads/2018/03/videojuegos-online-ios-android-videojuegos-smartphones-tablets-borntoplay.jpg" alt="" className="blogspot_image"/>
				<h1>VIDEOJUEGOS PARA TODOS</h1>
				<p>
				Hace ya tiempo que los videojuegos dejaron de ser menester y entretenimiento de minorías, hoy en día quien no encuentra un videojuego a su medida o no juega sencillamente es porque no quiere, echa un vistazo a tu alrededor y te darás cuenta de ello. En cualquier sitio encontrarás a alguien ensimismado con su_smartphone_alineando piezas de colores o aporreando los botones de una pequeña pero siempre fiel y eficiente portátil.					Primero fue el Doctor Protón con su legión de robots cobardes, luego los Rigaltins y sus Ordenadores X5G de guerra. Al infierno con todos ellos. Después de todo aquello, al regresar, alguien dispara contra la nave espacial deDukey este se ve forzado a realizar un salto de emergencia. La invasión alienígena ha comenzado, los policías de la ciudad han mutado y los invasores están raptando a las mujeres. Es la oportunidad perfecta para ensuciar todas las callejuelas con las entrañas de las fuerzas reptiles, los mutantes polis cerdos, y los monstruosos octabrains, todo ello en una notable y tremenda lucha por derrotar a las maquiavélicas fuerzas invasoras que pretenden destruir la Madre Tierra y acabar con sus abundantes reservas. ¡SAL A POR ELLOS! Destruye a los Freakazoids como si no hubiera un mañana. Caos y destrucción durante 30 niveles cargados de acción, socarronería noventera y algunas_streapers_. ¡Viva el Rey! Nena… ¡Es hora de marcha!
				Juegosdiarios.com es una de las web referencia en juegos_online_desde el año 2004, un portal con más de 29.325 juegos flash 100% gratis y más de 1.000 millones de visitantes. Alguna de las opciones de su amplio catálogo seguramente conseguirá llamarte la atención y despertará tu curiosidad, aunque seas reacio a este tipo de experiencias rápidas y adictivas.
				</p>
			</div>
		)		
		m.push(				
			<div className="blogspot_entry shadow" key={4}>
				<img src="http://www.borntoplay.es/wp-content/uploads/2017/11/quake-3-arena-videojuegos-id-software-ciber-multijugadores-online-juegos-adelantados-a-su-tiempo-sarge.jpg" alt="" className="blogspot_image"/>
				<h1>I LOVE: QUAKE III ARENA</h1>
				<p>
				Hace muchos, muchos siglos, los Vadrigar, conocidos como los misteriosos maestros de la arena, construyeron el Arena Eternal para su propia diversión infernal. Apenas se conocen detalles acerca de estos seres, sólo se sabe que disfrutaban con las matanzas y el clamor de la batalla. Tanto es así, que convocaron a los mejores guerreros de todos los tiempos. Tú fuiste uno de los elegidos.
				Como gladiador de Arena Eternal, tu objetivo era sobrevivir y vencer en cada uno de los combates contra rivales cada vez más poderosos. Sin embargo no tenías miedo a sufrir una derrota, porque los Vadrigar no se dejaban amedrentar en su terreno por algo tan insignificante como la muerte. Aquellos que sucumbían eran resucitados de forma instantánea para regresar a la batalla, quizá con más sabiduría gracias a su mala fortuna.
				Cuando la sangre, el polvo y los restos desaparecían, los guerreros ganaban el derecho a una nueva lucha. Pero solo aquel guerrero que había acabado con un mayor número de rivales, era coronado vencedor. El victorioso gladiador, al final, tenía que enfrentarse con Xaero, el Señor de la Arena Final.
				</p>
			</div>
		)				
		return m
	}
}

export default Home