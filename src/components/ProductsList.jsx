import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { productsArr } from "../utils/products";
import CartContext from "../Store/Cart-Context";

const ProductsList = () => {
  const ctx = useContext(CartContext);
  useEffect(() => {
    ctx.isLoggedIn &&
      fetch(ctx.url).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            ctx.setCart(data);
          });
        }
      });
  }, [ctx.isLoggedIn]);
  return (
    <div>
      {" "}
      <h1 className="text-center text-4xl font-bold mt-5 mb-10 font-serif ">
        SHIRTS
      </h1>
      <div className="flex flex-wrap xs:w-[250px] sm:w-[300px] md:w-[900px] md:m-auto sm:m-10 my-10">
        {productsArr.map((item) => (
          <li className="list-none" key={Math.random()}>
            <ProductCard item={item} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
