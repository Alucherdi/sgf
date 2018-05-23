import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import { Switch } from "react-router"

import AxtelForm from "./components/AxtelForm/AxtelForm.jsx"
import NewsHandler from "./components/News/NewsHandler"
import Home from "./components/Wrapper/Home.jsx"

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path={`${process.env.PUBLIC_URL}/axtel`} component={AxtelForm} />
					<Route path={`${process.env.PUBLIC_URL}/news`} component={NewsHandler} />
				</Switch>
			</ BrowserRouter>
		)
	}
}

export default Router
