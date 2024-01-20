import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Product from './Pages/Product';
import Carts from './Pages/Carts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="products" element={ <Product/>} />
          <Route path="cart" element={ <Carts/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
