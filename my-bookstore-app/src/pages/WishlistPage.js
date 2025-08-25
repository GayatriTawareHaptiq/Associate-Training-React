import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { removeFromWishlist } from '../features/wishlistSlice';
import { addToCart } from '../features/cartSlice';

const WishlistPage = () => {
    const dispatch = useDispatch();
    const { items: wishlistItems } = useSelector(state => state.wishlist);

    const handleAddToCart = (book) => {
        dispatch(addToCart(book));
        dispatch(removeFromWishlist(book));
    };

    return (
        <Container className="py-5">
            <h1 className="mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>Your Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>
                    Your wishlist is empty.{' '}
                    <Link to="/books" style={{ color: '#0d6efd' }}>Find some books</Link>
                </p>
            ) : (
                <Row className="gy-4">
                    {wishlistItems.map(item => (
                        <Col key={item.id} xs={12}>
                            <Row className="align-items-center bg-white p-3 rounded shadow-sm">
                                <Col xs="auto">
                                    <Image
                                        src={item.coverImage}
                                        alt={item.title}
                                        style={{
                                            width: '64px',
                                            height: '96px',
                                            objectFit: 'cover',
                                            borderRadius: '0.25rem'
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                                        {item.title}
                                    </h2>
                                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                                        {item.authors?.[0]}
                                    </p>
                                </Col>
                                <Col xs="auto">
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => handleAddToCart(item)}
                                        className="me-2"
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => dispatch(removeFromWishlist(item))}
                                    >
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default WishlistPage;
