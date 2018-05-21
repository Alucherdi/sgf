import React from "react"
import "./News.scss"

class News extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			news: props.state.news,
			loading: true
		}
	}

	render() {
		const ReactMarkdown = require('react-markdown');	
		function circle(){
			for(var i = 1; i < 13; i++){
				return(
					<div className={"sk-circle"+i+" sk-child"}></div>
				);
			}
		}
		var data = this.state.news.map((input, index) => {
			var json = JSON.parse(input);
            return(
                <div className="article" key={index}>
                    <ReactMarkdown className="content" escapeHtml={false} skipHtml={false} source={json.content} />
                    <br/>
                    <hr/>
                </div>
            );
		})
		this.setState({
			loading: false
		},() =>{
			if (this.state.loading) {
				return (
					<div className="sk-circle">
						{circle()}
					</div>
				);
			} else {
				return (
					<div>
						<p className="title">Noticias</p>
						{data}
					</div>
				)
			}
		})		
	}
}

export default News;