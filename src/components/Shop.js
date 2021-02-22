import React, {useState, useEffect} from 'react';
// import './styles/App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItemArray();   
  }, []);

  const [itemArray, setItemArray] = useState([]);

  const fetchItemArray = async () => {
    console.log('item list');

  }

  return (
    <div>
      <h1>Shop Page</h1>
      {itemArray.map(item => (
          <h2 key = {item.itemid}>
            <Link to = {`/shop/${item.itemid}`}>{item.name}</Link>
        </h2>
      ))}
  </div>
  );
}

export default Shop;