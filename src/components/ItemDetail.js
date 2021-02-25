import React, {useState, useEffect} from 'react';
import '../styles/item-detail.css';
import ShopItems from './ShopItems';
import {Link} from 'react-router-dom';

function ItemDetail({ match }) {

  console.log('item detail');

  const [items, setItems] = useState([]);
  const [itemDetails, setItemDetails] = useState({name: '', images: {}, id: '', price: ''});
  const [displayedItem, setDisplayedItem] = useState(parseInt(match.params.id));
  const [displayItems, setDisplayItems] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const matchingItem = [ShopItems];
    const shopDetail = matchingItem[0].item;
    console.log(shopDetail);
    console.log(displayedItem);
    const newItem = shopDetail.filter((shopDetail, i) => shopDetail.id === displayedItem);
    setItemDetails(newItem[0]);
    setDisplayItems(true);
  },[displayedItem])
 
  console.log(itemDetails.name);
  console.log(quantity);

  return (
  <div>
    {displayItems 
    ? <div className = 'column'>
      <Link to = {`/cart`}>
        <img src = {itemDetails.images} alt = {itemDetails.name} className = 'item-detail'></img>
      </Link>
      <h2>{itemDetails.name}</h2>
      <h2>{itemDetails.price}</h2>

      <div>
      <button id = 'decrease'>-</button>
      <input id = 'quantity' value = {quantity}></input>
      <button id = 'increase'>+</button>
      <button id = 'add-to-cart'>Add to Cart</button>
      </div>
    </div>
    : null}

  </div>
  );
}

export default ItemDetail;