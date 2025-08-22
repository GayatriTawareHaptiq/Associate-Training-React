import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../features/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleCheckout = () => {
        if (isLoggedIn) {
            toast.success('Proceeding to checkout!', {
                position: 'top-right',
                autoClose: 3000,
            });
            navigate('/');
        } else {
            toast.error('Please log in to proceed.', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    const handleRemove = (bookId) => {
        dispatch(removeFromCart({ id: bookId }));
        toast.info('Book removed from cart.', {
            position: 'top-right',
            autoClose: 2000,
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded p-4">
                            <img
                                src={item.coverImage}
                                alt={item.title}
                                className="w-full h-48 object-cover mb-4 rounded"
                            />
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-sm text-gray-700 mb-1">Author: {Array.isArray(item.authors) ? item.authors.join(', ') : 'Unknown'}</p>

                            <p className="text-sm mb-1">Published: {item.publishedDate}</p>
                            <p className="text-sm mb-1">Pages: {item.pageCount}</p>
                            <p className="text-sm mb-2">Quantity: {item.quantity}</p>
                            <p className="text-base font-bold mb-3">Price: ₹{item.price}</p>
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="bg-black text-white px-4 py-2"

                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <button
                    onClick={handleCheckout}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-colors"


                >
                    Checkout
                </button>
            )}
        </div>
    );
};

export default CartPage;
