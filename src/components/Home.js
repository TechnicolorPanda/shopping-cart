import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className = 'background'>
      <h1>George C. Parker's 
          <br/>
          Quality Bridges
      </h1>
      <h3>"Every path in life has a bridge ..."</h3>
      <Link to = '/shop'>
          <button className = 'shop'>
              Shop Now
         </button>
      </Link>
    </div>
  );
}

  export default Home;