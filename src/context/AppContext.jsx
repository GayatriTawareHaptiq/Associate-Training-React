import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.key === book.key);
      return exists ? prevCart : [...prevCart, book];
    });
  };

  const removeFromCart = (key) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== key));
  };

  const addToWishList = (book) => {
    setWishList((prevWishList) => {
      const exists = prevWishList.find((item) => item.key === book.key);
      return exists ? prevWishList : [...prevWishList, book];
    });
  };

  const removeFromWishList = (key) => {
    setWishList((prevWishList) => prevWishList.filter((item) => item.key !== key));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishList,
        addToCart,
        removeFromCart,
        addToWishList,
        removeFromWishList,
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

export {
  AppContextProvider,
  useAppContext,
};
export default AppContext;