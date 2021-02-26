import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

function Cart() {

  const location = useLocation();

  const [cartItem, setCartItem] = useState({
    quantity: location.state.number, 
    name: location.state.name, 
    price: location.state.price,
  });
  const [cartContents, setCartContents] = ([]);

  console.log(cartItem);

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
  </div>
  );
}

export default Cart;