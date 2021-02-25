import React, {useState, useEffect} from 'react';
import '../styles/shop.css';
import {Link} from 'react-router-dom';
import ShopItems from './ShopItems';

function Shop() {

  const items = ShopItems;

  return (
    <div className = 'content'>
      <h2>Would you like to buy a bridge?</h2>
      <div className = 'row'>
        {items.item.map((item => ( 
          <div className = 'column' key = {item.id}>
            <Link to = {`/shop/${item.id}`}>
              <img src = {item.images} alt = {item.name} className = 'item'></img>
            </Link>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
          </div>
        )))};
      </div>
    </div>
  );
}

export default Shop;