import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import { Switch } from "react-router"

import App from "./App"
import AxtelForm from "./components/AxtelForm/AxtelForm.jsx"
import Home from "./components/Wrapper/Home.jsx"

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/axtel" component={AxtelForm} />
					<Route path="/" component={Home} />
				</Switch>
			</ BrowserRouter>
		)
	}
}

export default Router
