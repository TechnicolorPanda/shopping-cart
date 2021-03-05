import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const DisplayCart = (props) => {

  const {cartItems} = props;
  const [cartItem, setCartItem] = useState({
    quantity: cartItems.quantity, 
    name: cartItems.name, 
    price: cartItems.price,
    id: cartItems.id,
    images: cartItems.images,
  });
  const [cartContents, setCartContents] = useState(
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );
  const [cartEmpty, setCartEmpty] = useState(true);

  // if the new item is the same as item in the cart then add quantities

  function updateQuantity() {
    let newQuantity;
    for(let i = 0; i < cartContents.length; i++) {
      if(cartItems.id === cartContents[i].id) {
        newQuantity = cartItems.quantity + cartContents[i].quantity;
        console.log(newQuantity);
        return newQuantity;
      }
    }
  }

  function checkUniqueness(proposedCart) {
    console.log(proposedCart);
    const newArray = [...new Set(proposedCart.map(cartItem => cartItem.id))];
    console.log(...newArray);
    console.log([...newArray].length);
    console.log(proposedCart.length);
    return [...newArray].length === proposedCart.length;
  }

  useEffect(() => {
    let proposedCart = [];
    if (cartItem.name === '') {
      console.log('no item');
    } else {
      let newQuantity = updateQuantity();
      console.log(newQuantity);
      proposedCart = cartContents.concat(cartItem);
      let uniqueItem = checkUniqueness(proposedCart);
      console.log(uniqueItem);
      if(uniqueItem) {
        setCartContents(proposedCart);
      } else {
        console.log('update quantity');
      }
    }
  },[cartItem])

  console.log(cartContents);

  useEffect(() => {
    if (cartContents.length > 0) {
      setCartEmpty(false);
    }
  }, [cartContents])

  useEffect(() => {
    localStorage.setItem('mySavedCart', JSON.stringify(cartContents));
  }, [cartContents])

  function calculatePrice(basePrice, baseQuantity) {
    const price1 = basePrice * baseQuantity;
    const price = price1.toFixed(2);
    return price;
  }

  function formattedPrice(rawPrice) {
    let price = parseFloat(rawPrice);
    price = price.toFixed(2);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function totalCost(cartContents) {
    let total = 0;
    cartContents.map((cartItem => (
      total = parseFloat(calculatePrice(cartItem.price, cartItem.quantity)) + parseFloat(total)
    )));
    console.log(total);
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
    console.log('on handle change');
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
    console.log(cartContents);
    console.log(cartContents.indexOf(cartItem));
    setCartContents(cartContents => cartContents.filter((cartItem, i) => cartContents.indexOf(cartItem) !== i));
  }

  const decreaseQuantity = (event) => {
    console.log('decrease quantity');
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
          <div className = 'column'>{formattedPrice(calculatePrice(cartItem.price, cartItem.quantity))}</div>
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