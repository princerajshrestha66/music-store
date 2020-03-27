import React from 'react';
import {Menu_Item} from '../../Component/Menu-item/menu-item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
               {
                    title:'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id:1
               },
               {
                    title:'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id:2
               },
               {
                    title:'Coat',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3
               },
               {
                    title:'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id:4
               }, 
                {
                    title:'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id:5
               } 
            ]
        }
    }
    render() {
        return (
            <div className="homepage">
            <Container>
                    <h2>Our Products</h2>
                     <Row>
                      {
                            this.state.sections.map((section) => {
                                return (
                                    <Menu_Item
                                        id={section.id}
                                        imgUrl={section.imageUrl}
                                        title={section.title}
                                    />
                                )
                            })
                    }
                  </Row>
              </Container>
            </div>
        )
    }
}