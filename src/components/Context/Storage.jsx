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
				for (let data of entries.entries()) {
					promises.push(new Promise((resolve, reject) => {
						dbx.filesGetMetadata({ path: data.path_display })
						.then(metadata => {
							dbx.usersGetAccount({ account_id: metadata.sharing_info.modified_by })
							.then(account => {
								dbx.filesGetTemporaryLink({ path: data.path_display })
								.then(json => {
									fetch(json.link)
									.then(jsonRes => {
										return jsonRes.text()
									})
									.then(text => {
										resolve({
											content:    text,
											file_id:    metadata.id,
											date:       metadata.client_modified,
											owner_id:   account.account_id,
											owner_name: account.name.display_name
										})
									})
								})
							})
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
				state: this.state
			}}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

class SProvider extends Component {
	render() {
		return (
			<Provider>
				<Context.Consumer>
					{(context) => (
						<div>{React.cloneElement(this.props.children, { state: context.state })}</div>
					)}
				</Context.Consumer>
			</Provider>
		)
	}
}


export default SProvider;