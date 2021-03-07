import React, { useState } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Home = () => {

  const [cartContents, setCartContents] = useState(
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );

  function numberOfItems(cartContents) {
    let numberOfItems = 0;
    cartContents.map((cartItem => (
      numberOfItems = parseInt(numberOfItems) + parseInt(cartItem.quantity)
    )));
    return numberOfItems;
  }

  return (
    <div>
      <Nav
        totalQuantity = {numberOfItems(cartContents)}
      />
    <div className = 'background'>
      <h1>George C. Parker's 
          <br/>
          Quality Bridges
      </h1>
      <h3 className = 'tagline'>"Every path in life has a bridge ..."</h3>
      <Link to = {`/shop`}>
        <button className = 'shop'>
            Shop Now
        </button>
      </Link>
    </div>
    </div>
  );
}

  export default Home;