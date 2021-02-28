import React from 'react';
import '../styles/shop.css';
import {Link} from 'react-router-dom';
import ShopItems from './ShopItems';

function Shop(props) {

  const { 
    cartContents,
  } = props;
  const items = ShopItems;

  // console.log(cartContents.length);


  function formattedPrice(rawPrice) {
    return rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className = 'content'>
      <h2>Would you like to buy a bridge?</h2>
      <div className = 'row'>
        {items.item.map((item => ( 
          <div className = 'column' key = {item.id}>
            <Link to = {{
              pathname: `/shop/${item.id}`,
              state: {
                cartContents: cartContents,
              }
            }}>
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