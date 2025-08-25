import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
import { clearSelectedBook } from '../features/booksSlice';
import { addToCart } from '../features/cartSlice';
import { addToWishlist } from '../features/wishlistSlice'; 

// Utility function to safely modify image URL
const getCoverImageWithZoomZero = (url) => {
    if (typeof url === 'string' && url.includes('zoom=1')) {
        return url.replace('zoom=1', 'zoom=0');
    }
    return url || 'https://placehold.co/128x192?text=No+Cover';
};

const BookDetailsPage = () => {
    const dispatch = useDispatch();
    const { selectedBook: book } = useSelector((state) => state.books);

    if (!book) {
        return <div className="text-center p-5">No book selected.</div>;
    }

    const sanitizedDescription = DOMPurify.sanitize(book.description || 'No description available.');

    return (
        <div className="bg-light py-5">
            <div className="container">
                <button 
                    onClick={() => dispatch(clearSelectedBook())} 
                    className="btn btn-link mb-4 text-decoration-none text-primary"
                >
                    &larr; Back to all books
                </button>
                <div className="card shadow-lg mb-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img 
                                src={getCoverImageWithZoomZero(book.coverImage)} 
                                alt={`Cover of ${book.title}`} 
                                className="img-fluid h-100 object-fit-cover"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title h3 fw-bold">{book.title}</h1>
                                <p className="card-subtitle text-muted mb-2">by {book.authors.join(', ')}</p>
                                <p className="text-secondary small mb-3">
                                    Published: {book.publishedDate || 'N/A'} &bull; Pages: {book.pageCount || 'N/A'}
                                </p>
                                <div 
                                    className="card-text mb-4"
                                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                                />
                                <div className="d-flex gap-3">
                                    <button 
                                        className="btn btn-primary flex-fill"
                                        onClick={() => dispatch(addToCart(book))}
                                    >
                                        Add to Cart
                                    </button>
                                    <button 
                                        className="btn btn-outline-secondary flex-fill"
                                        onClick={() => dispatch(addToWishlist(book))}
                                    >
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
