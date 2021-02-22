import React, {useState, useEffect} from 'react';
// import './styles/App.css';

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();   
    console.log(match);
  }, []);

  const [item, setItem] = useState({images: {}});

  const fetchItem = async () => {
    console.log('item');
  };

  return (
  <div>
    <h2>{item.name}</h2>
    <img src = {item.images.transparent} alt= '' />
  </div>
  );
}

export default ItemDetail;