import { createContext, useContext } from "react";

const CartContext = createContext([]);

const CartProvider = CartContext.Provider;

const useCart = () => useContext(CartContext);

export {CartProvider, useCart};