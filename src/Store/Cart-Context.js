import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addToCart: (item) => {},
});

export default CartContext;
