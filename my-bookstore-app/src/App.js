import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BookPage';
import BookDetailsPage from './pages/BookDetailsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';

const App = () => {
    return (
        <Router>
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/books" element={<BooksPage />} />
                        <Route path="/books/:id" element={<BookDetailsPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/wishlist" element={<WishlistPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                    </Routes>
                </main>
                <Footer />
                <ToastContainer />
            </div>
        </Router>
    );
};

export default App;
