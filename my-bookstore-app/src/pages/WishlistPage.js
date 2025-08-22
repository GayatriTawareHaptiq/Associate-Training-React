import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty. <Link to="/books" className="text-blue-600">Find some books</Link></p>
            ) : (
                <div className="space-y-4">
                    {wishlistItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                            <img src={item.coverImage} alt={item.title} className="w-16 h-24 object-cover rounded"/>
                            <div className="flex-grow ml-4">
                                <h2 className="font-bold">{item.title}</h2>
                                <p className="text-sm text-gray-600">{item.authors?.[0]}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={() => handleAddToCart(item)} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">Add to Cart</button>
                                <button onClick={() => dispatch(removeFromWishlist(item))} className="text-red-500 hover:text-red-700">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;