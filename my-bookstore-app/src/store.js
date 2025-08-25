import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/booksSlice';
import authReducer from './features/authSlice';
import cartReducer from './features/cartSlice';
import wishlistReducer from './features/wishlistSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        auth: authReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
});