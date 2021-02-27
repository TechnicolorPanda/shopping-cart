import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import DisplayCart from './DisplayCart';
import uniqid from 'uniqid';


function Cart() {

  const location = useLocation();

  const [cartItem, setCartItem] = useState({
    quantity: location.state.number, 
    name: location.state.item, 
    price: location.state.price,
  });
  const [cartContents, setCartContents] = useState([]);
  const [displayItems, setDisplayItems] = useState(false);

  useEffect(() => {
    setCartContents(cartContents => cartContents.concat(cartItem));
    setCartItem('');
    setDisplayItems(true);
  },[])

  console.log(cartContents);

  // TODO: prevent reset of cart array

  return (
    <div>
      {displayItems
        ? <div>
        {cartContents.map((cartItem => {
          return(<DisplayCart key = {uniqid()}
            name = {cartItem.name} 
            price = {cartItem.price}
            quantity = {cartItem.quantity}
          />)}))}
    </div>
    : null}
    </div>
  );
}

export default Cart;