import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const DisplayCart = (props) => {

  const {newCartItem} = props;
  const [cartItem, setCartItem] = useState({
    quantity: newCartItem.quantity, 
    name: newCartItem.name, 
    price: newCartItem.price,
    id: newCartItem.id,
    images: newCartItem.images,
  });
  const [cartContents, setCartContents] = useState(
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );
  const [cartEmpty, setCartEmpty] = useState(true);

  // if the new item is the same as item in the cart then add quantities

  function updateQuantity() {
    let newQuantity;
    for(let i = 0; i < cartContents.length; i++) {
      if(newCartItem.id === cartContents[i].id) {
        newQuantity = parseInt(newCartItem.quantity) + parseInt(cartContents[i].quantity);
        return newQuantity;
      }
    }
  }

  // checks new cart item to see if the item currently exists in the cart

  function checkUniqueness(proposedCart) {
    const newArray = [...new Set(proposedCart.map(cartItem => cartItem.id))];
    return [...newArray].length === proposedCart.length;
  }

  // creates duplicate item with the quantity sum to be added to the cart

  const displayNewQuantity = (matchingItem, newQuantity) => {

    const newUpdateQuantity = ({
      quantity: newQuantity, 
      name: matchingItem.name, 
      price: matchingItem.price,
      id: matchingItem.id,
      images: matchingItem.images,
    });
    return newUpdateQuantity;
  }

  // removes item with old quantity from the cart

  const deleteOldItem = (newItemId) => {
    const items = cartContents.filter(cartItem => cartItem.id !== newItemId);
    setCartContents(items);
  }

  // when item is added to cart, the hook will decide what to do with the item

  useEffect(() => {
    let proposedCart = [];
    if (cartItem.name === '') {
      console.log('no item');
    } else {
      let newQuantity = updateQuantity();
      proposedCart = cartContents.concat(cartItem);

      // addition to cart is based upon whether the item currently exists in the cart
      // quantity of items will be added if item already exists in cart 
      // and old items will be deleted

      let uniqueItem = checkUniqueness(proposedCart);
      if(uniqueItem) {
        setCartContents(proposedCart);
      } else {
        let newItemId = newCartItem.id;
        let matchingItem = cartContents.find((element) => {
          return element.id === newItemId;
        })
        deleteOldItem(newItemId);
        setCartContents(cartContents => cartContents.concat(displayNewQuantity(matchingItem, newQuantity)));
      }
    }
  },[cartItem])

  // determines whether cart is empty or contains item

  useEffect(() => {
    if (cartContents.length > 0) {
      setCartEmpty(false);
    }
  }, [cartContents])

  // places cart contents in local storage

  useEffect(() => {
    localStorage.setItem('mySavedCart', JSON.stringify(cartContents));
  }, [cartContents])

  // calculates price of item using price times quantity

  function calculatePrice(basePrice, baseQuantity) {
    const price1 = basePrice * baseQuantity;
    const price = price1.toFixed(2);
    return price;
  }

  // adds comas every three digits to longer numbers 

  function formattedPrice(rawPrice) {
    let price = parseFloat(rawPrice);
    price = price.toFixed(2);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // adds item prices for total cost

  function totalCost(cartContents) {
    let total = 0;
    cartContents.map((cartItem => (
      total = parseFloat(calculatePrice(cartItem.price, cartItem.quantity)) + parseFloat(total)
    )));
    let grandTotal = formattedPrice(total);
    return grandTotal;
  }

  // updates number of items when a new quantity is typed in

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

  // handles quantity increase when plus button is selected

  const increaseQuantity = (event) => {

    // TODO: fix cart increase function so items are not deleted

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

  // handles quantity decrease when minus button is selected

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

  function numberOfItems(cartContents) {

    console.log('calculate quantity');
    let numberOfItems = 0;
    cartContents.map((cartItem => (
      numberOfItems = parseInt(numberOfItems) + parseInt(cartItem.quantity)
    )));
    console.log(cartContents);
    console.log(numberOfItems);
    return numberOfItems;
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
          <div className = 'column'>${formattedPrice(calculatePrice(cartItem.price, cartItem.quantity))}</div>
        </h3>
      )))}
      <h3 className = 'total'>Total = ${totalCost(cartContents)}</h3>
        </div>
      }

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

export default DisplayCart;