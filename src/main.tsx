import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ProductsContext from './context/productsContext.tsx';
import CartProvider from './context/CartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <ProductsContext>
        <App />
      </ProductsContext>
    </CartProvider>
  </React.StrictMode>
);
