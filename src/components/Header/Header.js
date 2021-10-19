import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuht from '../../hooks/useAuth';

const Header = () => {

  const{user, logOut} = useAuht()
  
    return (
        
           <>
         <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
  <Container>
  <Navbar.Brand href="#home">  <img
        src="http://world5.commonsupport.com/jewel/Dentalclinic/img/resources/footer-logo.png"
        width="200"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>

      {user.email && <span className="name" style={{ color: 'white' }}> {user.displayName} </span>}
      {
        user.email ? <button className="logout-button" onClick={logOut}>LogOut</button>
        :
        <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
      }
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>

       
    );
};

export default Header;