// src/routes/AppRoutes.jsx

import React from 'react';
import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Wishlist from '../pages/Wishlist';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
