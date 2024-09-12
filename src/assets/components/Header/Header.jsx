import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <img src="\src\assets\images\.LOGO.png" alt="logo kasa" />
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/a-propos">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;