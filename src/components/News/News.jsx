import React from "react"
import "./News.scss"

class News extends React.Component {

	constructor() {
		super();
		this.state = {
			news: [],
			loading: false
		}
		this.initDB();
	}

	initDB() {
		var token = 'oUhHgt2EauAAAAAAAAAAIL7ZT6g3MU5cUjwau-ZdbEnKVzPNM8-z8UU_G2NTYlgV';
		var Dropbox = require('dropbox').Dropbox;
		var dbx = new Dropbox({ accessToken: token });
		dbx.filesListFolder({ path: '/Noticias' }).then(response => {
			response.entries.map(data => {
				dbx.filesGetTemporaryLink({ path: data.path_display }).then(json => {
					fetch(json.link).then(response => {
						return response.text();
					}).then(text => {
						this.setState(prevState => ({
							news: [...prevState.news, text],
							loading: true
						}))
					})
				})
			});
		}).catch(function (error) {
			console.log(error);
		});
	}

	render() {
		const ReactMarkdown = require('react-markdown');

		var data = this.state.news.map((input, index) => {
			return (
				<div className="article" key={index}>
					<ReactMarkdown className="content" escapeHtml={false} skipHtml={false} source={input} />
					<br />
					<hr className="lineSeparator"/>
				</div>
			);
		})
		if (!this.state.loading) {
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
		} else {
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