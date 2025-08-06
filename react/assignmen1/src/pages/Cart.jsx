// src/pages/Cart.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';

function Cart() {
  const { cart, removeFromCart } = useAppContext();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((book) => (
              <li key={book.key} style={{ marginBottom: '1rem' }}>
                <strong>{book.title}</strong> by {book.author}
                <button
                  style={{ marginLeft: '1rem' }}
                  onClick={() => removeFromCart(book.key)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
