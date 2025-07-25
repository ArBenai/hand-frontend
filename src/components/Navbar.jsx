import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img className="logo" src={logo} alt="Hand in Hand"/>
          <span className="logo-text">Hand in Hand</span>
        </a>
        <div className="nav-right-group">
          <ul className="direct-nav-menu">
            <li className="nav-item">
              <a href="/login" className="nav-links nav-links-primary">
                Login
              </a>
            </li>
          </ul>
          <div className="burger-menu-container">
            <div className="burger-icon">
              ☰ 
            </div>
            <ul className="burger-nav-menu">
              <li className="nav-item">
                <a href="/home" className="nav-links">
                  Home 
                </a>
              </li>
              <li className='nav-item'>
                <a href="/exchange" className="nav-links">
                  Verschenken & Tauschen
                </a>
              </li>
              <li className="nav-item">
                <a href="/events" className="nav-links">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a href="/blog" className="nav-links">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/help" className="nav-links">
                  Hilfe & Support
                </a>
              </li>
              <li className="nav-item">
                <a href="/profile" className="nav-links">
                  Profil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;