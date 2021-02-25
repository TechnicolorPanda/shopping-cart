import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

function Cart() {

  const location = useLocation();

  const [cartItem, setCartItem] = useState({
    quantity: location.state.number, 
    name: location.state.item, 
    price: location.state.price
  });
  const [cartContents, setCartContents] = ([]);

  console.log(cartItem);

  function calculatePrice() {
    const price1 = parseInt(cartItem.price) * parseInt(cartItem.quantity);
    const price = price1.toFixed(2);
    console.log(price);
    return price;
  }

  useEffect(() => {
    calculatePrice();
  },[])

  return (
    <div>
      <h1>Cart</h1>
      <h3>{cartItem.name} ${cartItem.price} x {cartItem.quantity} = </h3>
  </div>
  );
}

export default Cart;