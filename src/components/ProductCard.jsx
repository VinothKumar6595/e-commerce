import React, { useContext } from "react";
import { productsArr } from "../utils/products";
import CartContext from "../Store/Cart-Context";
import { NavLink, Navigate } from "react-router-dom";

const ProductCard = (props) => {
  const ctx = useContext(CartContext);
  const addToCartHandler = (item) => {
    ctx.addToCart({ ...item, Quantity: 1 });
  };

  return (
    <div className="w-72 h-78 mb-12 mx-8 md:ml-28 ">
      <div>
        <NavLink to={"/product-details/" + props.item.title}>
          <img
            src={props.item.imageUrl}
            alt=""
            className="rounded-lg h-72 w-72 hover:cursor-pointer hover:border-solid hover:border-2 hover:border-blue-800"
          />{" "}
        </NavLink>
      </div>
      <div className="flex justify-between items-center m-2">
        <h2 className="font-bold">${props.item.price}</h2>
        <div className=" w-28 py-2 text-center items-center rounded-lg bg-gray-400 text-black hover:bg-black hover:text-white">
          <button onClick={() => addToCartHandler(props.item)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
