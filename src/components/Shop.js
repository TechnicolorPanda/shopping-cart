import React from 'react';
import '../styles/shop.css';
import { Link } from 'react-router-dom';
import ShopItems from './ShopItems';
import CartCounter from './CartCounter';


function Shop() {

  const items = ShopItems;

  // adds comas to numbers over 1,000

  function formattedPrice(rawPrice) {
    return rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function importedImage(itemImage) {
    let imageName = itemImage;
    console.log(imageName);
    return imageName;
  }

  return (
    <div className = 'content'>
      <CartCounter/>
      <h2 className = 'shop-heading'>Would you like to buy a bridge?</h2>
      <div className = 'row' id = 'shop'>
        {items.item.map((item => ( 
          <div className = 'column' key = {item.id}>
            {console.log(item.images)}
            <Link to = {`/shopping-cart/shop/${item.id}`}>
              <img src = {item.images} alt = {item.name} className = 'item'></img>
            </Link>
            <h3>{item.name}</h3>
            <h3>${formattedPrice(item.price)}</h3>
          </div>
        )))}
      </div>
    </div>
  );
}

export default Shop;