// src/pages/Products.jsx

import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../api/books';
import { categories } from '../api/categories';
import BookCard from '../components/BookCard';
import { useAppContext } from '../context/AppContext';

function Products() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState('');
  const { addToCart, addToWishlist } = useAppContext();

  useEffect(() => {
    const params = {};
    if (query) {
      params.query = query;
    } else if (categoryQuery) {
      params.category = categoryQuery;
    } else {
      params.category = 'fiction'; // default
    }

    fetchBooks(params).then(setBooks);
  }, [query, categoryQuery]);

  return (
    <div className="container">
      <h2>Browse Books</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(e) => {
            setCategoryQuery('');
            setQuery(e.target.value);
          }}
        />

        <select
          value={categoryQuery}
          onChange={(e) => {
            setQuery('');
            setCategoryQuery(e.target.value);
          }}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.query} value={cat.query}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="book-grid">
        {books.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
