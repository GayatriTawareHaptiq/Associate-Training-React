import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // ✅ Added
import { Card, Button } from 'react-bootstrap';
import { selectBook } from '../features/booksSlice';
import { addToCart } from '../features/cartSlice';
import { addToWishlist } from '../features/wishlistSlice';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

const BookCard = ({ book }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // ✅ Added

    const handleViewDetails = () => {
        dispatch(selectBook(book));
        navigate(`/books/${book.id}`); // ✅ Added
    };

    return (
        <Card className="h-100 shadow-sm card-hover">
            <div onClick={handleViewDetails} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={book.coverImage} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Card.Text className="text-muted">{book.authors?.[0]}</Card.Text>
                </Card.Body>
            </div>
            <Card.Footer className="d-flex justify-content-between bg-white border-0 p-2">
                <Button variant="light" className="w-100 me-1" size="sm" onClick={() => dispatch(addToCart(book))}>
                    <FaCartPlus /> Cart
                </Button>
                <Button variant="light" className="w-100 ms-1" size="sm" onClick={() => dispatch(addToWishlist(book))}>
                    <FaHeart /> Wishlist
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default BookCard;
