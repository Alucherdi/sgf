import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"

import App from "./App"

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<switch>
					<div>
						<Route path="/testing" component={App} />
					</div>
				</switch>
			</ BrowserRouter>
		)
	}
}

export default Router
