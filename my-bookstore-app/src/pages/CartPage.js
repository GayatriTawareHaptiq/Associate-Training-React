import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const isLoggedIn = true; // Replace with actual auth logic

    const handleCheckout = () => {
        if (isLoggedIn) {
            toast.success('Proceeding to checkout!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            navigate('/');
        } else {
            toast.error('Please log in to proceed.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cartItems.map((item) => (
                        <li key={item.id} className="border p-4 rounded shadow-sm bg-white">
                            <h2 className="text-lg font-medium">{item.title}</h2>
                            <p className="text-sm text-gray-700">Author: {item.authors.join(', ')}</p>
                            <p className="text-sm">Quantity: {item.quantity}</p>
                            <p className="text-sm font-semibold">Price: ₹{item.price}</p>
                        </li>
                    ))}
                </ul>
            )}

            <button
                onClick={handleCheckout}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Checkout
            </button>
        </div>
    );
};

export default CartPage;
