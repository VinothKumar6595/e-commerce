import React from "react";

const CartContext = React.createContext({
  token: "",
  login: (token) => {},
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (item) => {},
  clearCart: () => {},
});

export default CartContext;
