import React from 'react';
import Home from './Home'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <Switch>
    <nav className="navbar navbar-light bg-light">
      <a href="index.html" className="navbar-brand">Simple Shopping Cart</a>
       <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => props.show()}>Cart {(props.cart.length)}</button>
    </nav>
    </Switch>
  );
};
export default Navbar;