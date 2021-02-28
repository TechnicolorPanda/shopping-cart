import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function Cart(props) {

  const { 
    myCart,
  } = props;

  const [cartContents, setCartContents] = useState(myCart);

  const location = useLocation();
  const [cartItem, setCartItem] = useState({
    quantity: location.state.number, 
    name: location.state.itemDetails.name, 
    price: location.state.itemDetails.price,
    id: location.state.itemDetails.id,
  });
  // const [cartContents, setCartContents] = useState([]);

  useEffect(() => {
    setCartContents(cartContents => cartContents.concat(cartItem));
    setCartItem('');
  },[])

  function calculatePrice(basePrice, baseQuantity) {
    const price1 = parseInt(basePrice) * parseInt(baseQuantity);
    const price = price1.toFixed(2);
    return formattedPrice(price);
  }

  function formattedPrice(rawPrice) {
    return rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  console.log(cartContents);

  // TODO: prevent reset of cart array

  return (
    <div>
      <h1>Cart</h1>
      {cartContents.map((cartItem => (
        <h3 key = {cartItem.id}>{cartItem.name} 
        ${formattedPrice(cartItem.price)} x {cartItem.quantity} = 
        {calculatePrice(cartItem.price, cartItem.quantity)}</h3>
      )))}

      <Link to = {{
        pathname: `/shop`,
        state: {
          cartContents: cartContents,
        }
      }}>
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