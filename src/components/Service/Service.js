import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    console.log(props.service)
    const{name, img, id, discreption} = props.service;

    return (
      
   
      <div className="service">
          <Card className="borders" style={{ width: '22rem' }}>
           <Card.Img variant="top" src={img} className="img"  />
           <Card.Body>
           <Card.Title className="card-tittle mt-3">{name}</Card.Title>
           <Card.Text>
           {discreption}
           </Card.Text>
           <Link to={`/service/${id}`}> <Button className="mb-4 mt-3" variant="outline-success">Details</Button></Link>
           </Card.Body>
           </Card>
      </div>
        
      
    );
};

export default Service;