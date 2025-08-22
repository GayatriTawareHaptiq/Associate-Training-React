import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
import { clearSelectedBook } from '../features/booksSlice';
import { addToCart } from '../features/cartSlice';
import { addToWishlist } from '../features/wishlistSlice'; 

const BookDetailsPage = () => {
    const dispatch = useDispatch();
    const { selectedBook: book } = useSelector((state) => state.books);

    if (!book) {
        return <div className="text-center p-10">No book selected.</div>;
    }

    const sanitizedDescription = DOMPurify.sanitize(book.description || 'No description available.');

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <button 
                    onClick={() => dispatch(clearSelectedBook())} 
                    className="mb-8 text-blue-600 hover:underline"
                >
                    &larr; Back to all books
                </button>
                <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                    <img 
                        className="h-64 md:h-auto md:w-64 object-cover" 
                        src={book.coverImage.replace('zoom=1', 'zoom=0')} 
                        alt={`Cover of ${book.title}`} 
                    />
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
                        <p className="text-lg text-gray-600 mt-2">by {book.authors.join(', ')}</p>
                        <p className="text-sm text-gray-500 mt-1">
                            Published: {book.publishedDate || 'N/A'} &bull; Pages: {book.pageCount || 'N/A'}
                        </p>

                        <p 
                            className="mt-6 text-gray-700 leading-relaxed" 
                            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                        />

                        <div className="mt-8 flex gap-4">
                            <button 
                                className="flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                onClick={() => dispatch(addToCart(book))}
                            >
                                Add to Cart
                            </button>
                            <button 
                                className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                                onClick={() => dispatch(addToWishlist(book))}
                            >
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
