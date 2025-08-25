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
        <div className="container py-5">
            <h1 className="h3 fw-bold mb-4">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
            ) : (
                <div className="row gy-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={item.coverImage}
                                    alt={item.title}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text text-muted mb-1">
                                        Author: {Array.isArray(item.authors) ? item.authors.join(', ') : 'Unknown'}
                                    </p>
                                    <p className="card-text mb-1">Published: {item.publishedDate}</p>
                                    <p className="card-text mb-1">Pages: {item.pageCount}</p>
                                    <p className="card-text mb-1">Quantity: {item.quantity}</p>
                                    <p className="card-text fw-bold">Price: ₹{item.price}</p>
                                </div>
                                <div className="card-footer bg-transparent border-0">
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="btn btn-dark w-100"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <div className="mt-4">
                    <button
                        onClick={handleCheckout}
                        className="btn btn-dark"
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
