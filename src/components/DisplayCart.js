import React from 'react';
// import '../styles/cart.css';
import { Link } from 'react-router-dom';

const DisplayCart = (props) => {
    const { 
        name,
        price,
        quantity,
      } = props;

      function calculatePrice(basePrice, baseQuantity) {
        const price1 = parseInt(basePrice) * parseInt(baseQuantity);
        const price = price1.toFixed(2);
        return formattedPrice(price);
      }
    
      function formattedPrice(rawPrice) {
        return rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

  return (
      <div>
    <h1>Cart</h1>
      <h3>{name} 
       ${formattedPrice(price)} x {quantity} = 
      {calculatePrice(price, quantity)}</h3>
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