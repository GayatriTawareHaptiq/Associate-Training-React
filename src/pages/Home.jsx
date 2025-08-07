// src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { fetchBooks } from '../api/books';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeaturedBooks() {
      setLoading(true);
      const results = await fetchBooks({ query: 'programming' });
      setBooks(results.slice(0, 20));
      setLoading(false);
    }

    loadFeaturedBooks();
  }, []);

  return (
    <div className="home">
      <h2>Featured Books</h2>
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
}

export default Home;
