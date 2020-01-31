import React from 'react';
import Navbar from './Navbar'
import './App.css';
import Footer from './Footer';
import ListProduct from './ListProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListProduct />
      <Footer />
    </div>
  );
}

export default App;
