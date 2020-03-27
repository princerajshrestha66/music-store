import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export const Cards  = (props) => {
        return (
        <Col xs={6} sm={4} md={3}>
            <Card  bg="primary" text="white" names= {props.monster}>
                <Card.Img alt={props.name}  src={`https://robohash.org/${props.id}?set=set2size=180*180`}/>
                <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                              {props.email}
                        </Card.Text>
                    <Button variant="secondary"> Call: {props.phone}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}