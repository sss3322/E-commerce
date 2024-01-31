

import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


import Cart from './Cart';
import Home from './Home';
import { CartProvider } from './CartContext';
import ProductDetails from './ProductDetails';


function App() {
  return (
     <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </Router>
      </CartProvider>
    
  );
}

export default App;
