// src/pages/Checkout.jsx

import React from 'react';
import { useAppContext } from '../context/AppContext';
import BookCard from '../components/BookCard';

function Checkout() {
  const { cart } = useAppContext();

  return (
    <div className="container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="book-grid">
            {cart.map((book) => (
              <BookCard key={book.key} book={book} />
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            Total Items: <strong>{cart.length}</strong>
          </p>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button className="book-btn">Confirm Purchase</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
