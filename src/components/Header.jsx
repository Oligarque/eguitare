// '/components/Header.jsx'
// Le header de l'app présent sur toutes les pages


import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import eguitareLogo from '/images/android-chrome-512x512.png'
import './Header.css'
import songs from '../data/songsData';

function Header() {
  return (
    <header className='header'>

      {/* La navbar  */}
      <Navbar bg="navbarColor" variant="dark" expand="md">
        <Container>
          {/* Logo et titre du site */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={eguitareLogo} 
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Site Logo"
            />
            {' '}EGuitare
          </Navbar.Brand>

          {/* Bouton pour le menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Liens de navigation */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/' className='home-link'>Home</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
              <Nav.Link as={Link} to='/about' >About</Nav.Link>

              {/* Menu déroulant pour les morceaux */}
              <NavDropdown title="Songs" id="basic-nav-dropdown">
                {songs.map(song => (
                  <NavDropdown.Item as={Link} to={`/learning/${song.id}`} key={song.id}>
                    {song.title}
                  </NavDropdown.Item>
                ))}
                <NavDropdown.Item as={Link} to='/songList'>Plus de morceaux</NavDropdown.Item>
                {/* TODO Ajouter une page de liste de sons*/}
              </NavDropdown>
              {/* TODO Ajouter une barre de recherche */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
