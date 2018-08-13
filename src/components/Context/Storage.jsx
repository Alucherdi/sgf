import React, { Component } from 'react'
import { Dropbox } from "dropbox"
import properties from '../Properties';

const Context = React.createContext();

class Provider extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dropboxToken: properties.services.dropbox,
			news: []
		}

		var dbx = new Dropbox({ accessToken: this.state.dropboxToken });
		
		this.dropboxFileData(dbx)
			.then(all => {
				this.setState({
					news: all
				})
			})			
	}

	dropboxFileData = (dbx) => {
		return new Promise((resolve, reject) => {			
			dbx.filesListFolder({ path: "/SGNews" })
			.then(response => {
				return new Promise((resolve, reject) => {
					resolve(response.entries)
				})
			}).then((entries) => {
				let promises = []
				entries.forEach(data => {					
					promises.push(new Promise((resolve, reject) => {
						dbx.filesGetTemporaryLink({ path: data.path_display })						
							.then(json => {		
								fetch(json.link)
								.then(jsonRes => {
									return jsonRes.text()
								})
								.then(text => {
									resolve({
										content: text,
										name: data.name,
										date: data.server_modified,
										id: data.rev
									})
								})
							})
						}))		
				});
				resolve(Promise.all(promises))
			})
		})
	}

	render() {
		return (
			<Context.Provider value={{
				data: this.state.news
			}}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export {
	Context,
	Provider
};