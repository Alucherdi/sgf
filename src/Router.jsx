import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import { Switch } from "react-router"

import AxtelForm from "./components/AxtelForm/AxtelForm.jsx"
import News from "./components/News/News"
import Home from "./components/Wrapper/Home.jsx"

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path={`${process.env.PUBLIC_URL}/axtel`} component={AxtelForm} />
					<Route path={`${process.env.PUBLIC_URL}/news`} component={News} />
				</Switch>
			</ BrowserRouter>
		)
	}
}

export default Router