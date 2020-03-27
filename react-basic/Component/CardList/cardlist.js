import React from 'react';
import {Cards} from '../Card/card';
import Row from 'react-bootstrap/Row';
export const CardList = props => (
        <Row>
            {props.monster.map(monster => (
                <Cards 
                    phone={monster.phone} 
                    id={monster.id} 
                    key={monster.name}  
                    name={monster.name} 
                    email={monster.email}>
                </Cards>
            ))}
        </Row>
)