import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <nav>
      <ul className = 'nav-links'>
        <Link to = '/'>
          <li className = 'logo'>Logo</li>
        </Link>
        <Link to = '/shop'>
          <li className = 'shop'>Shop</li>
        </Link>
        <Link to = '/cart'>
          <li className = 'cart'>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;