import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../api/books';
import { categories } from '../api/categories';
import BookCard from '../components/BookCard';
import { addToCart } from '../features/cartSlice'; // ✅ correct path
import { addToWishlist } from '../features/wishlistSlice'; // ✅ correct name and path

function Products() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const params = {};

      if (query) {
        params.query = query;
      } else if (categoryQuery) {
        params.category = categoryQuery;
      } else {
        params.category = 'fiction';
      }

      try {
        const data = await fetchBooks(params);
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, categoryQuery]);

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  const handleAddToWishList = (book) => {
    dispatch(addToWishlist(book)); // ✅ fixed function name
  };

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
        {loading ? (
          <p>Loading books...</p>
        ) : books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              onAddToCart={() => handleAddToCart(book)}
              onAddToWishlist={() => handleAddToWishList(book)}
            />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
