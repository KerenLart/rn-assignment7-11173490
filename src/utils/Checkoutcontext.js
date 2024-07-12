import React from "react";
import { createContext, useEffect, useState } from "react";
import { addToCheckout,removeFromCheckout,loadCheckout } from "./asyncstorage";
import { fetchProducts } from "./fetchapi";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    
    const [products, setProducts] =useState([]);
    const [cart, setCart] = useState([]);

    useEffect (() => {
        const initializeData = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);

        
            const initial = await loadCheckout();
            setCart(initial);
    };
    initializeData();
    }, []);

    handleAddToCart = async (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (!existingItem) {
          const updatedCart = await addToCheckout(cart, item);
          setCart(updatedCart);
        } else {
          console.log('Item already in cart');
        }
      };
      const handleRemoveFromCart = async (item) => {
        const updatedCart = await removeFromCheckout(cart, item);
        setCart(updatedCart);
      };
      
    
      return (
        <CheckoutContext.Provider value={{ products, cart, handleAddToCart, handleRemoveFromCart }}>
          {children}
        </CheckoutContext.Provider>
      );
    };
    
    export { CheckoutContext };