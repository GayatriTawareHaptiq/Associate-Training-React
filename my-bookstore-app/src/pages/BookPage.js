import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import { fetchBooks } from '../features/booksSlice';
import BookCard from '../components/BookCard';
import useDebounce from '../hooks/useDebounce';

const categories = ['Fiction', 'Science', 'History', 'Business', 'Computers', 'Fantasy', 'Biography'];

const BookPage = () => {
    const dispatch = useDispatch();
    const { items: books, status, error } = useSelector((state) => state.books);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Computers');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        dispatch(fetchBooks({ query: debouncedSearchTerm, category: selectedCategory }));
    }, [debouncedSearchTerm, selectedCategory, dispatch]);

    return (
        <Container className="py-5">
            <Row className="bg-light p-3 rounded mb-5 shadow-sm">
                <Col md={8}>
                    <Form.Control
                        type="text"
                        placeholder="Search for any book..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
                <Col md={4}>
                    <Form.Select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </Form.Select>
                </Col>
            </Row>

            <h2 className="mb-4">{`Showing results for: ${selectedCategory}`}</h2>

            {status === 'loading' && <div className="text-center"><Spinner animation="border" /></div>}
            {status === 'failed' && <p className="text-danger text-center">Error: {error}</p>}
            {status === 'succeeded' && books.length === 0 && <p className="text-muted text-center">No books found.</p>}

            {status === 'succeeded' && books.length > 0 && (
                <Row xs={1} sm={2} md={4} className="g-4">
                    {books.map(book => (
                        <Col key={book.id}>
                            <BookCard book={book} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default BookPage;