// src/pages/Wishlist.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../features/wishlistSlice';

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-container text-center">
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>No books in wishlist.</p>
      ) : (
        <ul className="wishlist-list">
          {wishlistItems.map(item => (
            <li key={item.key} className="wishlist-item">
              <img src={item.coverUrl} alt={item.title} className="wishlist-image" />
              <div className="wishlist-details">
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <button className="book-btn" onClick={() => dispatch(removeFromWishlist(item.key))}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
