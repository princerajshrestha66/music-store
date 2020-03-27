import React from 'react';
import Form  from 'react-bootstrap/Form';
export const Search =(props) => {
		return (
			<div className="search">
				  <Form.Group>
				    <Form.Label>Search Monster</Form.Label>
				    <Form.Control onChange={props.search} type="search" placeholder="Search" />
				  </Form.Group>
			</div>
		);
}
 