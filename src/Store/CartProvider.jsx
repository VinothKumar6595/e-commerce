import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const cartHandler = (item) => {
    const existingItemIndex = cartItems.findIndex((color) => {
      return item.title === color.title;
    });
    const existingItem = cartItems[existingItemIndex];

    let updatedItem;
    let updatedItems;
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        Quantity: Number(existingItem.Quantity) + Number(item.Quantity),
      };
      updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = updatedItem;
      setCartItems(updatedItems);
    } else {
      setCartItems((prev) => {
        return [...prev, item];
      });
    }
  };

  const cartContext = {
    cartItems: cartItems,
    addToCart: cartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
