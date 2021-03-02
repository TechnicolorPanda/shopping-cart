import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import DisplayCart from './DisplayCart';
import '../styles/cart.css';

function Cart() {

  console.log('cart');

  const location = useLocation();
  const [cartItem, setCartItem] = useState({
    quantity: location.state.number, 
    name: location.state.itemDetails.name, 
    price: location.state.itemDetails.price,
    id: location.state.itemDetails.id,
    images: location.state.itemDetails.images,
  });
  const [cartContents, setCartContents] = useState(
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );
  
  useEffect(() => {
    setCartContents(cartContents => cartContents.concat(cartItem));
  },[cartItem])

  useEffect(() => {
    console.log('place in local storage');
    localStorage.setItem('mySavedCart', JSON.stringify(cartContents));
  },[cartContents])

  return (
    <div>
      <DisplayCart/>
    </div>
  );
}

export default Cart;