import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className = 'App'>
        <div className = 'navbar'>
          <Nav/>
        </div>
        <div className = 'content'>
          <Switch>
            <Route path = '/shopping-cart/' exact component = {Home} />
            <Route path = '/shopping-cart/cart' component = {Cart}/>
            <Route path = '/shopping-cart/shop' exact component = {Shop}/>
            <Route path = '/shopping-cart/shop/:id' exact component = {ItemDetail}/>
            <Route path = '/shopping-cart/checkout' component = {Checkout}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

