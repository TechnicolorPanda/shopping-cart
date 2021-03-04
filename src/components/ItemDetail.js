import React, { useState, useEffect } from 'react';
import '../styles/item-detail.css';
import ShopItems from './ShopItems';
import { Link } from 'react-router-dom';

function ItemDetail({ match }) {

  const [itemDetails, setItemDetails] = useState({name: '', images: '', id: '', price: '', description: '',});
  const [displayedItem, setDisplayedItem] = useState(parseInt(match.params.id));
  const [displayItems, setDisplayItems] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const matchingItem = [ShopItems];
    const shopDetail = matchingItem[0].item;
    const newItem = shopDetail.filter((shopDetail, i) => shopDetail.id === displayedItem);
    setItemDetails(newItem[0]);
    setDisplayItems(true);
  },[displayedItem])

  const onHandleChange = (event) => {
    event.preventDefault();  
    setQuantity(parseInt(event.target.value));
  }

  const increaseQuantity = (event) => {
    event.preventDefault();
    setQuantity(parseInt(quantity) + 1);
  }

  const decreaseQuantity = (event) => {
    event.preventDefault();
    if (quantity > 0) {
      setQuantity(parseInt(quantity) - 1);
    }
  }

  function formattedPrice(rawPrice) {
    return rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
  <div className = 'item-selection'>
    {displayItems 
    ? <div className = 'column'>
      <div><img className = 'item-detail' src = {'./.' + itemDetails.images} alt = {itemDetails.name}></img></div>
      <h2>{itemDetails.name}</h2>
      <h3 className = 'description'>{itemDetails.description}</h3>
      <h2>${formattedPrice(itemDetails.price)}</h2>
      
      <div>
      <button id = 'decrease' onClick = {decreaseQuantity}>-</button>
      <input id = 'quantity' value = {quantity} onChange = {onHandleChange}></input>
      <button id = 'increase' onClick = {increaseQuantity}>+</button>
      <Link to = {{
        pathname: `/cart`,
        state: {
          number: quantity,
          itemDetails: itemDetails,
        }
      }}>
        <button id = 'add-to-cart'>Add to Cart</button>
      </Link>
      </div>
    </div>
    : null}

  </div>
  );
}

export default ItemDetail;