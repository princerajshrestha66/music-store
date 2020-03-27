import React from 'react'; 
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
export const Menu_Item = (props) => {
    return (
        <Col sm={6} md={4}>
            <div className="menu-item">
                    <CardGroup>
                        <Card>
                            <Link to={`/Products/${props.title}`}>
                                <Card.Img variant="top" src={props.imgUrl} />
                            </Link>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/Products/${props.title}`}>
                                        {props.title.toUpperCase()}
                                    </Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
            </div>
        </Col>
    )
}