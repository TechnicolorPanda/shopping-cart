import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Cart() {

  const location = useLocation();
  const [cartItem, setCartItem] = useState({
    quantity: location.state.number, 
    name: location.state.itemDetails.name, 
    price: location.state.itemDetails.price,
    id: location.state.itemDetails.id,
  });
  const [cartContents, setCartContents] = useState(
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );
  
  useEffect(() => {
    setCartContents(cartContents => cartContents.concat(cartItem));
  },[cartItem])

  useEffect(() => {
    localStorage.setItem('mySavedCart', JSON.stringify(cartContents));
  },[cartContents])

  function calculatePrice(basePrice, baseQuantity) {
    const price1 = parseInt(basePrice) * parseInt(baseQuantity);
    const price = price1.toFixed(2);
    return formattedPrice(price);
  }

  function formattedPrice(rawPrice) {
    return rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function totalCost(cartContents) {
    let total = 0;
    cartContents.map((cartItem => (
    total = parseInt(total) + parseInt(calculatePrice(cartItem.price, cartItem.quantity))
    )));
    let grandTotal = formattedPrice(total);
    return grandTotal;
  }

  function numberOfItems(cartContents) {
    let numberOfItems = 0;
    cartContents.map((cartItem => (
      numberOfItems = numberOfItems + cartItem.quantity
    )));
    return numberOfItems;
  }

  return (
    <div>
      <h1>Cart</h1>
      {cartContents.map((cartItem => (
        <h3 key = {cartItem.id}>{cartItem.name} 
        ${formattedPrice(cartItem.price)} x {cartItem.quantity} = 
        {calculatePrice(cartItem.price, cartItem.quantity)}</h3>
      )))}
      <h3 className = 'total'>Total = {totalCost(cartContents)}</h3>

      <Nav 
        totalQuantity = {numberOfItems(cartContents)}
      />

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