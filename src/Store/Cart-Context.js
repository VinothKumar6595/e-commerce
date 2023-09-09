import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (item) => {},
  clearCart: () => {},
});

export default CartContext;
