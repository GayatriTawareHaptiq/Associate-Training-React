import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], 
    },
    reducers: {
        addToCart: (state, action) => {
            const book = action.payload;
            const existingItem = state.items.find(item => item.id === book.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
              
                state.items.push({ ...book, quantity: 1, price: (Math.random() * 20 + 10).toFixed(2) });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;