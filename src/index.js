import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from '../src/Pages/Product';
import Carts from '../src/Pages/Carts';
import { BrowserRouter, Route,Routes  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="products" element={ <Product/>} />
          <Route path="cart" element={ <Carts/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
