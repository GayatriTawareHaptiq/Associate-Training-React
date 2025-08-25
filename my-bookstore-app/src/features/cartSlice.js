import { createSlice } from '@reduxjs/toolkit';
import { calculateBookPrice } from './calculateBookPrice'; 

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
                state.items.push({ 
                    ...book, 
                    quantity: 1, 
                    price: calculateBookPrice(book) 
                });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
