import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Search} from './Component/Search/search';
import {CardList} from './Component/CardList/cardlist';
export default class App extends Component {
	constructor(){
		super();
		this.state = {
			searchField: '',
			monster:[]
		}
	}
	
	componentDidMount() {
	    fetch('https://jsonplaceholder.typicode.com/users')
	    .then(response => response.json())
	    .then(users => this.setState({monster:users}))
	}
	render() {
		const {searchField, monster } = this.state;
		const filterMonster = monster.filter(monster => 
			monster.name.toLowerCase().includes(searchField.toLowerCase())
			)
		return (
			<Container>
				<div className="app">
					<h2 className="text-center">User Search</h2>
					<Search search={this.search}/>
					<CardList monster={filterMonster}/>
				</div>  
			</Container>
		)
	}
	
	
	search =(e) => {
		this.setState({
			searchField: e.target.value
			
		})
		console.log(this.state.monster);
	}
}
