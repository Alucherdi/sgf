import React from "react"
import "./News.scss"

class News extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}

	render() {	
		const ReactMarkdown = require('react-markdown');	
		var data = this.props.state.news.map((input, index) => {			
			if(this.state.loading){
				this.setState({
					loading: false
				})
			}
	        return(
                <div className="article" key={index}>
                    <ReactMarkdown className="content" escapeHtml={false} skipHtml={false} source={input.content} />
                    <br/>
                    <hr/>
                </div>
			);			
		})
		if(this.state.loading){
			return (
				<div className="sk-circle">
					<div className="sk-circle1 sk-child"></div>
					<div className="sk-circle2 sk-child"></div>
					<div className="sk-circle3 sk-child"></div>
					<div className="sk-circle4 sk-child"></div>
					<div className="sk-circle5 sk-child"></div>
					<div className="sk-circle6 sk-child"></div>
					<div className="sk-circle7 sk-child"></div>
					<div className="sk-circle8 sk-child"></div>
					<div className="sk-circle9 sk-child"></div>
					<div className="sk-circle10 sk-child"></div>
					<div className="sk-circle11 sk-child"></div>
					<div className="sk-circle12 sk-child"></div>
				</div>
			);
		}else{
			return (
				<div>											
					<p className="title">Noticias</p>
					{data}
				</div>
			)
		}		
	}
}

export default News;