import React from "react";

const CartContext = React.createContext({
  setCart: () => {},
  url: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (item) => {},
  clearCart: () => {},
});

export default CartContext;
