import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchBooks } from '../features/booksSlice';
import BookCard from '../components/BookCard';

const HomePage = () => {
    const dispatch = useDispatch();
    const { items: books, status, error } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks({ query: 'popular new releases', category: '' }));
    }, [dispatch]);

    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h1 className="display-4">Welcome to Book Haven</h1>
                <p className="lead text-muted">Your one-stop shop for all the books you love.</p>
            </div>

            <h2 className="mb-4">Featured Books</h2>
            
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p className="text-danger">Error: {error}</p>}
            
            {status === 'succeeded' && (
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

export default HomePage;