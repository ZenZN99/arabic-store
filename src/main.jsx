import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Components/context/CartCotext.jsx';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
   </BrowserRouter>
  </React.StrictMode>,
)
