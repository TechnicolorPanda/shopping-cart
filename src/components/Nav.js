import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';

function Nav(props) {

  const {totalQuantity} = props;
  const itemDetails = {name: '', images: '', id: '', price: '', description: '',};
  const quantity = 0;
  const shoppingCart = <FontAwesomeIcon icon = {faShoppingCart} />

  return (
    <nav>
      <ul className = 'nav-links'>
        <Link to = '/'>
          <li className = 'logo'><img src = {logo} alt = 'bridge logo'></img></li>
        </Link>

        <Link to = '/shop'>
          <li className = 'shop'>Shop</li>
        </Link>

        <Link to = {{
          pathname: '/cart',
          state: {
            number: quantity,
            itemDetails: itemDetails,
          }
        }}>
          <li className = 'cart'>{shoppingCart}
            <span className = 'item-count'>{totalQuantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;