import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function ProductCard(props){

  if(props.name === ''){
    throw new Error("Data not found")
  }
  const col={
    border: '1px solid orange',
    width: '18rem',
    marginRight: '10px',
    marginBottom:'5px'
  
  };
    return(
      <div className="ProductCard mt-4">
        <Card style={col} >
          <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWpqamhHEfZAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=" />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <b>{props.price}</b><br></br>
              {props.description}
            </Card.Text>
            <Button variant="primary">View Details</Button><br></br>
            <Button variant="primary" style={{ marginTop: '10px' }} onClick={() => props.removeCard(props.id)}>Remove</Button>
          </Card.Body>
        </Card>
        <Card />
      </div>
    );      
}

export default ProductCard;