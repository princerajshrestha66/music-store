import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Container from  'react-bootstrap/Container';
import {Artist} from './Component/artist'
import Tracks from './Component/tracks'
const API_URL = 'https://spotify-api-wrapper.appspot.com';
export default class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				ArtistQuery: '',
				tracks:[],
				artist:null 
			}
	}
	render() { 
		return (
			<div style={{marginTop:40}} className="app ">
				<Container>
					<h2 className='text-center' style={{marginBottom:30}}>
						 Search Music
					</h2>
					<Form onSubmit= {this.onSubmit}>
						<Form.Control 
							type="text" 
							placeholder="Search Music"
							onChange = {this.updateArtistQuery}
						/>
					</Form>
					
					
						<Artist className="text-center" artist = {this.state.artist}/>
					<Tracks tracks={this.state.tracks}/>
				</Container>
			</div>
		)
	}   
	
	updateArtistQuery = (e) => {
		this.setState({
			ArtistQuery : e.target.value
		})
	}
	
	 
	onSubmit = (event) => {
		event.preventDefault();
		fetch(`${API_URL}/artist/${this.state.ArtistQuery}`)
	    .then(response => response.json())
	    .then(json=> {
			if(json.artists.total > 0){
				var artist = json.artists.items[0];
				this.setState({artist})
				fetch(`${API_URL}/artist/${artist.id}/top-tracks/`)
				.then(response => response.json() )
				.then(json => this.setState({tracks:json.tracks, artists:''}))
				.catch(error=> alert(error.message))
			}
	    })
	    .catch(error=> alert(error.message))
	}
}   

