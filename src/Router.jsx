import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import { Switch } from "react-router"

import AxtelForm from "./components/AxtelForm/AxtelForm.jsx"
import News from "./components/News/News"
import Home from "./components/Wrapper/Home.jsx"
import Register from './components/Register/Register'
import Alliances from "./components/Alliances/Alliances"

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path={`${process.env.PUBLIC_URL}/axtel`} component={AxtelForm} />
					<Route path={`${process.env.PUBLIC_URL}/news`} component={News} />
					<Route path={`${process.env.PUBLIC_URL}/register`} component={Register} />
					<Route path={`${process.env.PUBLIC_URL}/alliances`} component={Alliances} />
				</Switch>
			</ BrowserRouter>
		)
	}
}

export default Router
