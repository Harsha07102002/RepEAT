import React, { createContext, useContext, useState } from "react";

const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wish, setWish] = useState([]);

  const addToWish = (product) => {
    console.log("Adding to wish:",product)
    setWish((prevWish) => [...prevWish, product]);
  };
  const value = {
    wish,
    addToWish,
  };
  const removeFromWish = (id) => {
    setWish((prevWish) => prevWish.filter((item) => item.id !== id));
  };

  return (
    <WishContext.Provider value={{ value, wish, addToWish, removeFromWish }}>
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => useContext(WishContext);
