

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookList from '../components/BookList';
import { fetchBooks } from '../api/books';

function SearchResults() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    const category = params.get('category') || '';

    async function loadSearchResults() {
      setLoading(true);
      const results = await fetchBooks({ query, category });
      setBooks(results.slice(0, 20));
      setLoading(false);
    }

    loadSearchResults();
  }, [location.search]);

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
}

export default SearchResults;
