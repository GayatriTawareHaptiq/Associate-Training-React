import React from 'react';
import { useAppContext } from '../context/AppContext'; 

function BookCard({ book }) {
  const { addToCart, addToWishList } = useAppContext(); 

  return (
    <div className="book-card">
      <img
        src={book.coverUrl}
        alt={`Cover of ${book.title}`}
        className="book-cover"
      />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author"><strong>Author:</strong> {book.author}</p>
      <p className="book-year"><strong>Published:</strong> {book.publishYear}</p>

      <div className="book-actions">
        <button className="book-btn" onClick={() => addToCart(book)}>
          Add to Cart
        </button>
        <button className="book-btn" onClick={() => addToWishList(book)}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default BookCard;
