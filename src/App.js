import React, { useState } from 'react';
import './styles/App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Cart from './components/Cart';
import DisplayCart from './components/DisplayCart';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [cartContents, setCartContents] = useState(
    JSON.parse(localStorage.getItem('mySavedCart')) || []
  );

  // function numberOfItems(cartContents) {

  //   console.log('calculate quantity');
  //   let numberOfItems = 0;
  //   cartContents.map((cartItem => (
  //     numberOfItems = parseInt(numberOfItems) + parseInt(cartItem.quantity)
  //   )));
  //   console.log(cartContents);
  //   console.log(numberOfItems);
  //   return numberOfItems;
  // }

  return (
    <Router>
      <div className = 'App'>
        <div className = 'navbar'>
          <Nav
            // totalQuantity = {numberOfItems(cartContents)}
          />
        </div>
        <div className = 'content'>
          <Switch>
            <Route path = '/' exact component = {Home} />
            <Route path = '/cart' component = {Cart}/>
            <Route path = '/display-cart' component = {DisplayCart}/>
            <Route path = '/shop' exact component = {Shop}/>
            <Route path = '/shop/:id' component = {ItemDetail}/>
            <Route path = '/checkout' component = {Checkout}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

