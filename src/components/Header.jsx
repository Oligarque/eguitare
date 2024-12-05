// '/components/Header.jsx'
// Le header de l'app présent sur toutes les pages


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eguitareLogo from '/images/android-chrome-512x512.png'
import './Header.css'
import songs from '../data/songsData';

function Header() {
  return (
    <header className="header">
      {/* La navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-navbarColor">
        <div className="container">
          {/* Logo et titre du site */}
          <Link className="navbar-brand" to="/">
            <img
              src={eguitareLogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Site Logo"
            />
            {' '}EGuitare
          </Link>

          {/* Bouton pour le menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens de navigation */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link home-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              {/* Menu déroulant pour les morceaux */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Songs
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {songs.map(song => (
                    <li key={song.id}>
                      <Link className="dropdown-item" to={`/learning/${song.id}`}>
                        {song.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link className="dropdown-item" to="/songList">Plus de morceaux</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
