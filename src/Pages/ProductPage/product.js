import React from 'react';
import Container from 'react-bootstrap/Container';
export default class Products extends React.Component {
    
    
    render() {
    
    
        console.log(this.props.children);
        return (
            <div className="Products">
                <Container>
                        <h2>
                           {this.props.title}
                        </h2>
                </Container> 
            </div>
        )
    }
}