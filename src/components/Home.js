import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import CartCounter from './CartCounter';

const Home = () => {

  return (
    <div>
      <CartCounter/>
      <div className = 'background'>
        <h1>George C. Parker's 
          <br/>
          Quality Bridges
        </h1>
        <h3 className = 'tagline'>"Every path in life has a bridge ..."</h3>
        <nav>
          <Link to = '/shop'>
            <button className = 'shop'>
              Shop Now
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

  export default Home;