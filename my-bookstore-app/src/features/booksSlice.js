import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    
    async ({ query, category }, { rejectWithValue }) => {
       
        const searchTerm = query || 'latest'; 
        
     
        let apiQuery = searchTerm;
        if (category) {
            
            apiQuery += `+subject:${category}`;
        }

        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(apiQuery)}&maxResults=18`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok.');
            
            const data = await response.json();
            
            if (!data.items) return [];

            
            return data.items.map(book => ({
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors || ['Unknown Author'],
                description: book.volumeInfo.description,
                coverImage: book.volumeInfo.imageLinks?.thumbnail || 'https://placehold.co/128x192?text=No+Cover',
                publishedDate: book.volumeInfo.publishedDate,
                pageCount: book.volumeInfo.pageCount,
            }));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        items: [],
        selectedBook: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        selectBook: (state, action) => {
            state.selectedBook = action.payload;
        },
        clearSelectedBook: (state) => {
            state.selectedBook = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { selectBook, clearSelectedBook } = booksSlice.actions;
export default booksSlice.reducer;