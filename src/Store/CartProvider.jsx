import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
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

  const removeCartHandler = (item) => {
    setCartItems(
      cartItems.filter((cartItem) => {
        return cartItem.title !== item.title;
      })
    );
  };

  const clearCartHandler = () => {
    setCartItems([]);
    <div className="font-bold text-3xl">
      {alert("Thanks for the purchase")}
    </div>;
  };

  const loginHandler = (token) => {
    localStorage.setItem("token", data.idToken);
    setToken(token);
  };

  const cartContext = {
    token: token,
    cartItems: cartItems,
    login: loginHandler,
    addToCart: cartHandler,
    removeFromCart: removeCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
