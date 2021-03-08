import React from 'react';
import '../styles/checkout.css';
import CartCounter from './CartCounter';

function Checkout() {

  return(
    <div>
      <CartCounter/>
      <h2 className = 'checkout'>Checkout</h2>
      <h3 className = 'checkout'>Don't be scammed! You can not buy a bridge on the Internet!</h3>
      <h4 className = 'checkout'>George C. Parker was born in New York City in 1860. 
          He is best known for selling local landmarks to immigrants.
          Mr. Parker sold the Brooklyn Bridge multiple times. As a result,
          the police removed several buyers from the bridge when they tried to erect toll booths. 
          He eventually died in Sing-Sing prison in 1936.</h4>
      <iframe 
        title = 'The Man Who Sold New York song' 
        width = '400'
        height = '240'
        src = 'https://www.youtube.com/embed/U_pC5mXKVF8' 
        frameBorder = '0' 
        allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
        allowFullScreen
        ></iframe>
    </div>
  )  
}

export default Checkout;