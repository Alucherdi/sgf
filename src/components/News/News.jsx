import React, {Component} from 'react';
import {Context, Provider} from '../Context/Storage';
import "./News.scss"
import ReactMarkdown from "react-markdown"
import NavBar from "../NavBar/NavBar.jsx"
import Loading from "../NavBar/assets/Loading.svg";

class News extends Component{

	constructor(props){
		super(props);
		this.state = {
			selected: "",
			loading: true
		}
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		},4000)
	}

	render(){	
		return(
			<Provider>
				<Context.Consumer>
					{context =>{

						var entry = context.data.map((key,index) =>{
							var date = new Date(key.date).toLocaleDateString('es-ES',{
								month: 'long',
								day: 'numeric'
							});

							var banner = key.content.split('\n').map((url,index) =>{				
								if(url.startsWith('!')){
									var expression = /[-a-zA-Z0-9@:%_.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_.~#?&//=]*)?/gi;
									var regex = new RegExp(expression);
									var nurl = url.match(regex);
									console.log(nurl[0])
									return(
										<img alt="banner" onClick={() =>{
											this.setState({
												selected: key.content
											})
										}} src={nurl[0]} key={index}/>
									);
								}
							})
							var lines = key.content.split('\n');
							if(lines[0].startsWith('#')){
								return(
									<div className="obj shadow">
										<div>
											<div style={{cursor: 'pointer'}}className="header" onClick={() =>{
													this.setState({
														selected: key.content
													})
												}}>
												<p>{"Por KiritoDev"}
													<span style={{ float: 'right' }}>{date}</span>
												</p>
											</div>
											<div className="banner">
												{banner}
											</div>
											<div className="body">
												<p className="title">{lines[0].replace('#','').trim()}</p>
												<hr className="hr"/>
												<div className="footer">
													<a href="https://www.twitch.tv/mariome">
														<img alt="twitch" className="media" src="https://media.discordapp.net/attachments/380090967421878283/449024695178887172/icons8_Twitch_64px.png" width="32" heigth="32"/>
													</a>
													<a href="https://twitter.com/KiritoDev">
														<img alt="twitter" className="media" src="https://media.discordapp.net/attachments/380090967421878283/449024699003961345/icons8_Twitter_64px.png" width="32" heigth="32"/>
													</a>
													<a href="https://www.youtube.com/c/KiritoDev">
														<img alt="youtube" className="media" src="https://media.discordapp.net/attachments/380090967421878283/449024699729444875/icons8_YouTube_64px_5.png" width="32" heigth="32"/>
													</a>
													<a href="facebook">
														
													</a>
												</div>
											</div>							
										</div>
									</div>  
								);
							}						
						})
						if(this.state.loading){
							return (
								<div className="loading">
									<img className="centered" alt="" src={Loading} width="150"/>
								</div>
							);
						}else{
							if(this.state.selected != ""){
								return(
									<div>			
										<button onClick={() =>{
										   this.setState({
												selected: ""
											})
										}} className="Button">{"Back to news"}</button>
										<div className="article">
											<ReactMarkdown className="content" escapeHtml={false} skipHtml={false} source={this.state.selected} />
										</div>
									</div>    
								)
							}else{
								return (
									<div>
										<NavBar/>								
										<div className="modules">
											<div className="module">
												<div className="news"> 
													{entry}									
												</div>	
											</div>
											<div className="module">
												<div className="ads">
													<div className="ad shadow">
														<img src="https://i.imgur.com/vaI9lym.png" width="335" height="279"/>									
													</div>		
													<div className="ad shadow">
														<img src="https://i.imgur.com/4cvxO3k.png" width="335" height="279"/>
													</div>		
													<div className="ad shadow">
														<img src="https://i.imgur.com/vaI9lym.png" width="335" height="279"/>									
													</div>		
													<div className="ad shadow">
														<img src="https://i.imgur.com/4cvxO3k.png" width="335" height="279"/>
													</div>
												</div>
											</div>
										</div>	
									</div>
								)
							}	
						}											
					}}
				</Context.Consumer>
			</Provider>
		)
	}
}

export default News;