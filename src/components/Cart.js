import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import '../styles/cart.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Cart() {

  const location = useLocation();
  const [cartContents, setCartContents] = useState(
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );
  const [cartEmpty, setCartEmpty] = useState(true);

  console.log(location.state.number);

  // if the new item is the same as item in the cart then add quantities

  const updateQuantityForDuplicates = (newCartItem) => {
    // const newCartItem = {
    //   quantity: location.state.number, 
    //   name: location.state.itemDetails.name, 
    //   price: location.state.itemDetails.price,
    //   id: location.state.itemDetails.id,
    //   images: location.state.itemDetails.images,
    // };
    for(let i = 0; i < cartContents.length; i++) {
      if(newCartItem.id === cartContents[i].id) {
        console.log('duplicate item');
        return parseInt(newCartItem.quantity) + parseInt(cartContents[i].quantity);
      } 
    }
  }

  // checks new cart item to see if the item currently exists in the cart

  const checkUniqueness = (proposedCart) => {
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
    setCartContents(cartContents => cartContents.filter(cartItem => cartItem.id !== newItemId));
  }

  // when item is added to cart, the hook will decide what to do with the item

  useEffect(() => {
    let proposedCart = [];
    const newCartItem = {
      quantity: location.state.number, 
      name: location.state.itemDetails.name, 
      price: location.state.itemDetails.price,
      id: location.state.itemDetails.id,
      images: location.state.itemDetails.images,
    };
    if (location.state.itemDetails.name === '') {
      console.log('no item');
    } else {
      let newQuantity = updateQuantityForDuplicates(newCartItem);
      proposedCart = cartContents.concat(newCartItem);

      // addition to cart is based upon whether the item currently exists in the cart
      // quantity of items will be added if item already exists in cart 
      // and old items will be deleted

      let uniqueItem = checkUniqueness(proposedCart);
      if(uniqueItem) {
        setCartContents(proposedCart);
      } else {
        let newItemId = location.state.itemDetails.id;
        let matchingItem = cartContents.find((element) => {
          return (element.id === newItemId);
        })
        deleteOldItem(newItemId);
        setCartContents(cartContents => cartContents.concat(displayNewQuantity(matchingItem, newQuantity)));
      }
    }
  },[])

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

  const calculatePrice = (basePrice, baseQuantity) => {
    const price1 = basePrice * baseQuantity;
    const price = price1.toFixed(2);
    return price;
  }

  // adds comas every three digits to longer numbers 

  const formattedPrice = (rawPrice) => {
    let price = parseFloat(rawPrice);
    price = price.toFixed(2);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // adds item prices for total cost

  const totalCost = (cartContents) => {
    let total = 0;
    cartContents.map((cartItem => (
      total = parseFloat(calculatePrice(cartItem.price, cartItem.quantity)) + parseFloat(total)
    )));
    let grandTotal = formattedPrice(total);
    return grandTotal;
  }

  // changes quantity in cart maintaining order of cart items

  const changeQuantity = (newQuantity, newItemId) => {
    let matchingItem = cartContents.find((element) => {
      return (element.id === parseInt(newItemId))
    })
    let identifyElement = cartContents.find((element) => {
      return (element.id === parseInt(newItemId))
    })
    let indexOfElement = cartContents.indexOf(identifyElement);
  
    const proposedCartItem = ({
      quantity: newQuantity, 
      name: matchingItem.name, 
      price: matchingItem.price,
      id: matchingItem.id,
      images: matchingItem.images,
    });

    setCartContents(cartContents => cartContents.filter(cartItem => cartItem.id !== newItemId));
    const left = cartContents.slice(0, indexOfElement);
    const right = cartContents.slice(indexOfElement + 1);
    setCartContents(left.concat(proposedCartItem, right));
  }

  // updates number of items when a new quantity is typed in

  const onHandleChange = (event) => {
    event.preventDefault();  
    let newQuantity = parseInt(event.target.value);
    if (newQuantity < 0) {
      newQuantity = 0;
    }
    let newItemId = event.target.getAttribute('id');
    changeQuantity(newQuantity, newItemId);
  }

  // handles quantity increase when plus button is selected

  const increaseQuantity = (event) => {
    event.preventDefault();  
    let newQuantity = parseInt(event.target.value) + 1;
    let newItemId = event.target.getAttribute('id');
    changeQuantity(newQuantity, newItemId);
  }

  // handles quantity decrease when minus button is selected

  const decreaseQuantity = (event) => {
    event.preventDefault();  
    let newQuantity = parseInt(event.target.value);
    if (newQuantity > 0) {
      newQuantity--;
    } else {
      newQuantity = 0;
    }
    let newItemId = event.target.getAttribute('id');
    changeQuantity(newQuantity, newItemId);
  }

  // displays total number of items for cart counter

  const numberOfItems = (cartContents) => {
    let numberOfItems = 0;
    cartContents.map((cartItem => (
      numberOfItems = parseInt(numberOfItems) + parseInt(cartItem.quantity)
    )));
    return numberOfItems;
  }

  return (
    <div className = 'cart-contents'>
      <Nav totalQuantity = {numberOfItems(cartContents)}/>
      <h2 className = 'cart-title'>Cart</h2>
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
        <h3 className = 'row' id = 'contents' key = {cartItem.id}>
          <div className = 'column'><img src = {cartItem.images} alt = {cartItem.name} className = 'cart-item'></img></div>
          <div className = 'column'>{cartItem.name}</div>
          <div className = 'column'>${formattedPrice(cartItem.price)}</div> 
          <div className = 'column'>
            <button
              className = 'decrease'     
              value = {cartItem.quantity}
              id = {cartItem.id} 
              onClick = {decreaseQuantity}>-</button>
            <input  
              value = {cartItem.quantity}
              id = {cartItem.id}
              onFocus = {(e) => e.target.value = ''} 
              onChange = {onHandleChange}>
            </input>
            <button 
              className = 'increase' 
              value = {cartItem.quantity}
              id = {cartItem.id}
              onClick = {increaseQuantity}>+</button>
          </div>
          <div className = 'column'>${formattedPrice(calculatePrice(cartItem.price, cartItem.quantity))}</div>
        </h3>
      )))}
      <h3 className = 'total'>Total = ${totalCost(cartContents)}</h3>
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

export default Cart;