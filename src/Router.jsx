import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import { Switch } from "react-router"

import AxtelForm from "./components/AxtelForm/AxtelForm.jsx"
import News from "./components/News/NewsTemp"
import Home from "./components/Wrapper/Home.jsx"
import Carousel from './components/Carousel/Carousel'
import Alliances from "./components/Alliances/Alliances"
import NewsMaker from './components/NewsMaker/NewsMaker';
import Post from './components/News/Post';
import BuyGamership from './components/BuyGamership/BuyGamership';
import Gamership from './components/Gamership/Gamership';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path={`${process.env.PUBLIC_URL}/axtel`} component={AxtelForm} />
					<Route path={`${process.env.PUBLIC_URL}/news`} component={News} />
					<Route path={`${process.env.PUBLIC_URL}/alliances`} component={Alliances} />
					<Route path={`${process.env.PUBLIC_URL}/uploader`} component={NewsMaker} />
					<Route path={`${process.env.PUBLIC_URL}/post/:id`} component={Post} />
					<Route path={`${process.env.PUBLIC_URL}/buygamership`} component={BuyGamership} />
					<Route path={`${process.env.PUBLIC_URL}/gamership`} component={Gamership} />
				</Switch>
			</ BrowserRouter>
		)
	}
}

export default Router
