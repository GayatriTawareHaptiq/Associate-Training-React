import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function Navbar() {
  const { cart, wishList } = useAppContext(); // ✅ corrected from 'wishlist' to 'wishList'

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Books</Link>
      <Link to="/wishlist">Wishlist ({wishList.length})</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}

export default Navbar;
