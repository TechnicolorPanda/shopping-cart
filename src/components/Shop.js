import React, { useState } from 'react';
import '../styles/shop.css';
import { Link } from 'react-router-dom';
import ShopItems from './ShopItems';
import Nav from './Nav';

function Shop() {

  const items = ShopItems;
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

  function formattedPrice(rawPrice) {
    return rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className = 'content'>
      <Nav
        totalQuantity = {numberOfItems(cartContents)}
      />
      <h2 className = 'shop-heading'>Would you like to buy a bridge?</h2>
      <div className = 'row'>
        {items.item.map((item => ( 
          <div className = 'column' key = {item.id}>
            <Link to = {`/shop/${item.id}`}>
              <img src = {item.images} alt = {item.name} className = 'item'></img>
            </Link>
            <h2>{item.name}</h2>
            <h2>${formattedPrice(item.price)}</h2>
          </div>
        )))};
      </div>
    </div>
  );
}

export default Shop;