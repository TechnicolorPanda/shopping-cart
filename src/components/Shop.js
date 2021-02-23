import React, {useState, useEffect} from 'react';
import '../styles/shop.css';
import {Link} from 'react-router-dom';

function Shop() {

  const items = {
    item: [
      {name: 'Golden Gate Bridge', 
      images: './images/golden-gate.jpg', 
      id: 5483, 
      price: '$35,000,000',},

      {name: 'Brooklyn Bridge',
      images: './images/brooklyn-bridge.jpg',
      id: 8675,
      price: '$15,000,000',},

      {name: 'Basic Bridge',
      images: './images/broken-bridge.jpg',
      id: 5309,
      price: '$57.39',}
    ]
  }

  const selectImage = () => {
    console.log ('select image');
    console.log(items);
  }

  return (
    <div className = 'content'>
      <h2>Would you like to buy a bridge?</h2>
    <div className = 'row'>
      {items.item.map((item => ( 
        <div className = 'column' key = {item.id}>
          <button onClick = {selectImage}>
            <img src = {item.images} alt = {item.name} className = 'item'></img>
          </button>
          <h2>{item.name}</h2>
          <h2>{item.price}</h2>
        </div>
      )))};
    </div>
    </div>
  );
}

export default Shop;