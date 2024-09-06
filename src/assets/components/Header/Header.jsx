import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <img src="\src\assets\images\.LOGO.png" alt="logo kasa" />
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">A propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;