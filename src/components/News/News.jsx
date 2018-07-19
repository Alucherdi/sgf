import React, { Component } from 'react';
import { Context, Provider } from '../Context/Storage';
import "./News.scss"
import ReactMarkdown from "react-markdown"
import NavBar from "../NavBar/NavBar.jsx"
import Loading from "../Assets/Loading.svg";

class News extends Component{

	constructor(props) {
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
				<NavBar />
				<Context.Consumer>
					{context =>{
						var entry = context.data.map((key,index) =>{
							var obj = JSON.parse(key.content);
							var date = new Date(key.name.replace(".json", "")).toLocaleDateString('es-ES',{
								month: 'long',
								day: 'numeric'
							});
							return(
								<div className="obj shadow" key={index}>
										<div>
											<div style={{cursor: 'pointer'}}className="header" onClick={() =>{
													this.setState({
														selected: obj.content
													})
												}}>
												<p>{"Por "+obj.author}
													<span className="hide-img" style={{ float: 'right' }}>{date}</span>
												</p>
											</div>
											<div className="banner">
											<img alt="banner" onClick={() => {
												this.setState({
													selected: obj.content
												})
											}} src={obj.banner} />
											</div>
											<div className="body">
												<p className="title">{obj.title}</p>
												<hr className="hr" />
												<div className="footer">
													<a href="https://www.twitch.tv/mariome">
														<img alt="twitch" className="media" src="https://media.discordapp.net/attachments/380090967421878283/449024695178887172/icons8_Twitch_64px.png" width="32" heigth="32" />
													</a>
													<a href="https://twitter.com/KiritoDev">
														<img alt="twitter" className="media" src="https://media.discordapp.net/attachments/380090967421878283/449024699003961345/icons8_Twitter_64px.png" width="32" heigth="32" />
													</a>
													<a href="https://www.youtube.com/c/KiritoDev">
														<img alt="youtube" className="media" src="https://media.discordapp.net/attachments/380090967421878283/449024699729444875/icons8_YouTube_64px_5.png" width="32" heigth="32" />
													</a>
													<a href="facebook">

													</a>
												</div>
											</div>
										</div>
									</div>
							)
						})
						if(this.state.loading){
							return (
								<div className="bgstar">
									<div id='stars'></div>
									<div id='stars2'></div>
									<div id='stars3'></div>
									<div id='title'>
										<span class="saving">Loading <span>o</span><span>w</span><span>o</span></span>
									</div>	
									<div className="loading">
										{
											<img className="centered" alt="" src={Loading} width="150"/>
										}
									</div>
								</div>								
							);
						}else{
							if(this.state.selected !== ""){
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