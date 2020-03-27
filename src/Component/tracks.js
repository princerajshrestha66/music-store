import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/button';
export default class Tracks extends  Component {
    constructor(props ) {
    super(); 
        this.state = {
            playing: false,
            audio:null
        }
    }
    playAudio = preview_url => ()=> {
        const audio = new Audio(preview_url);
       if(!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                audio
            }); 
       }
       else {
       this.state.audio.pause();
           this.setState({
            playing:false
           })
       }
       
    }
    render() {
        const {tracks} = this.props;
        return (
        
            <div className="tracks">
                <Row>
                    {
                        tracks.map(track => {
                        const { id,name, album, preview_url} = track
                            return (
                                <Col sm={4} key={id}>
                                    <Card style={{marginBottom:20}}>
                                        <Card.Img variant="top" src={album.images[0].url} alt={name}/>
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Button onClick={this.playAudio(preview_url)} variant="primary">Play audio</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                
            </div>
        )
    }
}