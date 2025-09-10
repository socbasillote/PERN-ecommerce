import React from 'react'
import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { useThemeStore } from './store/useThemeStore';
import {Toaster} from "react-hot-toast";
import CartPage from './pages/CartPage';

function App() {

  const { theme} = useThemeStore();
  return (
    <div className='min-h-screen bg-base-200 transition-colors duration-300' data-theme={theme}>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App