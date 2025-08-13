import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart } from '../features/cartSlice';

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items: cartItems } = useSelector(state => state.cart);
    const { isLoggedIn } = useSelector(state => state.auth);

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    const handleCheckout = () => {
        if (isLoggedIn) {
            alert('Proceeding to checkout!');
            
            navigate('/');
        } else {
            
            navigate('/login');
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/books" className="text-blue-600">Go Shopping</Link></p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                                <img src={item.coverImage} alt={item.title} className="w-16 h-24 object-cover rounded"/>
                                <div className="flex-grow ml-4">
                                    <h2 className="font-bold">{item.title}</h2>
                                    <p className="text-sm text-gray-600">${item.price} x {item.quantity}</p>
                                </div>
                                <button onClick={() => dispatch(removeFromCart(item))} className="text-red-500 hover:text-red-700">Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-4 bg-white rounded-lg shadow text-right">
                        <h2 className="text-2xl font-bold">Total: ${totalAmount}</h2>
                        <button onClick={handleCheckout} className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;