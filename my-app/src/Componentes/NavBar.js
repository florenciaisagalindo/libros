import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './Estilos/NavBar.css'


const NavBar = () => {
    return ( 
        
      <Navbar id="navbar" bg="dark">
        <Navbar.Brand className="titulo-nb">Titulo</Navbar.Brand>
      </Navbar>
   
     );
}
 
export default NavBar;