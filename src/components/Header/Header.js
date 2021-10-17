import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
           <>
         <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Dental Clinic</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>

       
    );
};

export default Header;