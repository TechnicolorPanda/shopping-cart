import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const DisplayCart = () => {

  console.log('display cart');

  const [cartItem, setCartItem] = useState({
    quantity: '', 
    name: '', 
    price: '',
    id: '',
    images: '',
  });
  const [cartContents, setCartContents] = useState(
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    if(cartItem.length) {
      console.log('add item to contents');
      setCartContents(cartContents => cartContents.concat(cartItem));
      setCartEmpty(false);
    // } else {
    //   console.log('cart empty');
    //   setCartEmpty(true);
    }
  },[cartItem])

  useEffect(() => {
    if (cartContents.length) {
      setCartEmpty(false);
    }
  }, [cartContents])

  useEffect(() => {
    console.log('place in local storage');
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

  const onHandleChange = (event) => {
    event.preventDefault();  
    let newQuantity = event.target.value;
    setCartItem({
      quantity: newQuantity, 
      name: cartItem.name, 
      price: cartItem.price,
      id: cartItem.id,
      images: cartItem.images,
    });
    setCartContents(cartContents => cartContents.filter((cartItem, i) => cartContents.indexOf(cartItem) !== i));
  }

  const increaseQuantity = (event) => {
    event.preventDefault();
    let newQuantity = cartItem.quantity;
    newQuantity++;
    setCartItem({
      quantity: newQuantity, 
      name: cartItem.name, 
      price: cartItem.price,
      id: cartItem.id,
      images: cartItem.images,
    });
    setCartContents(cartContents => cartContents.filter((cartItem, i) => cartContents.indexOf(cartItem) !== i));
  }

  const decreaseQuantity = (event) => {
    event.preventDefault();
    let newQuantity = cartItem.quantity;
    if (newQuantity > 0) {
      newQuantity--;
    };
    setCartItem({
      quantity: newQuantity, 
      name: cartItem.name, 
      price: cartItem.price,
      id: cartItem.id,
      images: cartItem.images,
    });
    setCartContents(cartContents => cartContents.filter((cartItem, i) => cartContents.indexOf(cartItem) !== i));
  }

  return (
    <div className = 'cart-contents'>
      <h2>Cart</h2>
      {cartEmpty
        ? <div>
        <li>Your Cart is Empty</li>
        </div>
        : <div>      
      <h3 className = 'row' id = 'categories'>
        <div className = 'column'> </div>
        <div className = 'column'>Item</div>
        <div className = 'column'>Price</div>
        <div className = 'column'>Quantity</div>
        <div className = 'column'>Total Price</div>
      </h3>
      {cartContents.map(((cartItem) => (
        <h3 className = 'row' key = {cartItem.id}>
          <div className = 'column'><img src = {cartItem.images} alt = {cartItem.name} className = 'cart-item'></img></div>
          <div className = 'column'>{cartItem.name}</div>
          <div className = 'column'>${formattedPrice(cartItem.price)}</div> 
          <div className = 'column'>
            <button id = 'decrease' onClick = {decreaseQuantity}>-</button>
            <input  
              value = {cartItem.quantity}
              onFocus = {(e) => e.target.value = ''} 
              onChange = {onHandleChange}>
            </input>
            <button id = 'increase' onClick = {increaseQuantity}>+</button>
          </div>
          <div className = 'column'>{calculatePrice(cartItem.price, cartItem.quantity)}</div>
        </h3>
      )))}
      <h3 className = 'total'>Total = ${totalCost(cartContents)}</h3>

      <Nav 
        totalQuantity = {numberOfItems(cartContents)}
      />
      </div>
}

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

  export default DisplayCart;