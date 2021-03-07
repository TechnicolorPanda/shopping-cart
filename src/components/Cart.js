import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import DisplayCart from './DisplayCart';
import '../styles/cart.css';

function Cart() {

  const location = useLocation();
  const [cartItem, setCartItem] = useState({
    quantity: location.state.number, 
    name: location.state.itemDetails.name, 
    price: location.state.itemDetails.price,
    id: location.state.itemDetails.id,
    images: location.state.itemDetails.images,
  });

  return (
    <div>
      <DisplayCart
        newCartItem = {cartItem}
      />
    </div>
  );
}

export default Cart;