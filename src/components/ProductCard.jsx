import React from "react";
import { productsArr } from "../utils/products";

const ProductCard = (props) => {
  console.log(props);
  return (
    <div className="w-72 h-76 mb-12 mx-8 md:ml-28 ">
      <div>
        <img
          src={props.item.imageUrl}
          alt=""
          width="100%"
          className="rounded-lg"
        />{" "}
      </div>
      <div className="flex justify-between items-center m-2">
        <h2 className="font-bold">${props.item.price}</h2>
        <div className=" w-28 py-2 text-center items-center rounded-lg bg-gray-200 text-black hover:bg-black hover:text-white">
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
