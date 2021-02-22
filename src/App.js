import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = 'App'>
        <Nav/>
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/cart' component = {Cart}/>
          <Route path = '/shop' exact component = {Shop}/>
          <Route path = '/shop/:id' component = {ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

