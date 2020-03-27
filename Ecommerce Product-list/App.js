import React, {Component} from 'react';
import HomePage from './Pages/HomePage/Homepage';
import Products from './Pages/ProductPage/product';
import {Route, Switch} from 'react-router-dom';
export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route exact path="/" component={HomePage}></Route>
					<Route path="/Product/:title" component={Products}></Route>
				</Switch>
			</div>
		)
	}   
	
}
