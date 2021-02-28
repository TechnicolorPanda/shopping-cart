import React, { useState } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  const cartContents = [];

  console.log(cartContents.length);

  return (
    <div className = 'background'>
      <h1>George C. Parker's 
          <br/>
          Quality Bridges
      </h1>
      <h3 className = 'tagline'>"Every path in life has a bridge ..."</h3>
      <Link to = {{
        pathname: `/shop`,
        state: {cartContents: cartContents}
      }}>
        <button className = 'shop'>
            Shop Now
        </button>
      </Link>
    </div>
  );
}

  export default Home;