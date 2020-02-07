import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="index.html" className="navbar-brand">Simple Shopping Cart</a>
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => props.show()}>Cart {(props.cart.length)}</button>
    </nav>
  );
};
export default Navbar;