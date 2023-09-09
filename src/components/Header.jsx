import React, { useContext, useState } from "react";
import Cart from "./Cart";
import CartContext from "../Store/Cart-Context";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartToggle, setCartToggle] = useState(false);
  const ctx = useContext(CartContext);
  const cartQty = ctx.cartItems.reduce((current, item) => {
    return current + Number(item.Quantity);
  }, 0);
  return (
    <div>
      <div className="w-full shadow-md flex items-center pl-2">
        <h1 className="text-3xl font-bold">E-Commerce</h1>
        <ul className="flex w-96 justify-around m-auto h-16 items-center font-bold">
          <li className="hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/">Store</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <button
          className="mr-10 px-4 py-2 hover:bg-gray-900 hover:text-white rounded-md bg-gray-200 text-black"
          onClick={() => setCartToggle((prev) => !prev)}
        >
          Cart
          <span className="p-2">{cartQty}</span>
        </button>
        {cartToggle && <Cart setCartToggle={setCartToggle} />}
      </div>
    </div>
  );
};

export default Header;
