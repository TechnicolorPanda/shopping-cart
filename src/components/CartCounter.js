import React from 'react';
import '../styles/home.css';
import Nav from './Nav';

const CartCounter = () => {

  // retrieves saved cart from local storage

  const cartContents = (
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );

  // determines number of items currently in cart

  const numberOfItems = (cartContents) => {
    let numberOfItems = 0;
    cartContents.map((cartItem => (
      numberOfItems = parseInt(numberOfItems) + parseInt(cartItem.quantity)
    )));
    return numberOfItems;
  }

  return (
    <div>
      <Nav totalQuantity = {numberOfItems(cartContents)}/>
    </div>
  )
}

export default CartCounter;