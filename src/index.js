import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
import App from './App';
import ProductList from './ProductList';
import NavBar from './NavBar';
import Header from './Header';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './Products';
import Contact from './Contact';




//list of sausages


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Contact />
          </Route>
        </Switch>
    </Router>
    {/* insert the rest of the page here */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
