import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


function Cart() {

  const location = useLocation();

  const [cartItem, setCartItem] = useState({
    quantity: location.state.number, 
    name: location.state.item, 
    price: location.state.price,
  });
  const [cartContents, setCartContents] = ([]);

  function calculatePrice() {
    const price1 = parseInt(cartItem.price) * parseInt(cartItem.quantity);
    const price = price1.toFixed(2);
    return formattedPrice(price);
  }

  function formattedPrice(rawPrice) {
    return rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <h1>Cart</h1>
      <h3>{cartItem.name} ${formattedPrice(cartItem.price)} x {cartItem.quantity} = {calculatePrice()}</h3>
      <Link to = '/shop'>
        <button className = 'go-to-store'>
          Keep Shopping
        </button>
      </Link>
      <Link to = '/checkout'>
        <button className = 'checkout'>
          Checkout
        </button>
      </Link>
  </div>
  );
}

export default Cart;