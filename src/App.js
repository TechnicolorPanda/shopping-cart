import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';
import Checkout from './components/Checkout';
import { HashRouter, Route } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <div className = 'App'>
        <div className = 'navbar'>
          <Nav/>
        </div>
        <div className = 'content'>
            <Route path = '/' exact component = {Home} />
            <Route path = '/shopping-cart/' exact component = {Home} />
            <Route path = '/cart' component = {Cart}/>
            <Route path = '/shop' exact component = {Shop}/>
            <Route path = '/shop/:id' exact component = {ItemDetail}/>
            <Route path = '/checkout' component = {Checkout}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

