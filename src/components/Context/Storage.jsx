import React, { Component } from 'react'
import { Dropbox } from "dropbox"

const Context = React.createContext();

class Provider extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			dropboxToken: "oUhHgt2EauAAAAAAAAAAIL7ZT6g3MU5cUjwau-ZdbEnKVzPNM8-z8UU_G2NTYlgV",
			news: []
		}

		var dbx = new Dropbox({ accessToken: this.state.dropboxToken });

		// Éste es el metodo de llenado, no se que hagas con el, pero (all) es la variable que trae toda la data

		this.dropboxFileData(dbx)
			.then(all => {
				this.setState({
					news: all
				})
			})
	}

	dropboxFileData = (dbx) => {
		return new Promise((resolve, reject) => {
			dbx.filesListFolder({ path: "/Noticias" })
			.then(response => {
				return new Promise((resolve, reject) => {
					resolve(response.entries)
				})
			}).then((entries) => {
				let promises = []
				for (let [index, data] of entries.entries()) {
					promises.push(new Promise((resolve, reject) => {
						dbx.filesGetTemporaryLink({ path: data.path_display })						
							.then(json => {		
								fetch(json.link)
								.then(jsonRes => {
									return jsonRes.text()
								})
								.then(text => {
									resolve({
										content:    text,
										date:       json.metadata.client_modified,
										file_id: json.metadata.id.split(':')[1],
										path: data.path_display.split('/')[2].split('.md')[0],
										owner_id:   json.metadata.sharing_info.modified_by
								})
						}))
					}
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