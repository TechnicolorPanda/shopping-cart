import React, { useState } from 'react';
import '../styles/home.css';
import Nav from './Nav';

const CartCounter = () => {

    const cartContents = (
      JSON.parse(localStorage.getItem('mySavedCart')) || []
    );
  
    function numberOfItems(cartContents) {
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