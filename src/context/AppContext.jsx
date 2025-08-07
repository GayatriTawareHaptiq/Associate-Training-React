

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Add to Cart
  const addToCart = (book) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.key === book.key);
      return exists ? prevCart : [...prevCart, book];
    });
  };

  const removeFromCart = (key) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== key));
  };

  // Add to Wishlist
  const addToWishlist = (book) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.key === book.key);
      return exists ? prevWishlist : [...prevWishlist, book];
    });
  };

  const removeFromWishlist = (key) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.key !== key));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export default AppContextProvider;
