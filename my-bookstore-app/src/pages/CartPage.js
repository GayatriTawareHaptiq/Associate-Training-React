import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = true; 

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
            {/* Cart items would be rendered here */}
            <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Checkout
            </button>
        </div>
    );
};

export default CartPage;
