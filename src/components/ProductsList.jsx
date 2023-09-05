import React from "react";
import ProductCard from "./ProductCard";
import { productsArr } from "../utils/products";

const ProductsList = () => {
  return (
    <div>
      {" "}
      <h1 className="text-center text-4xl font-bold mt-5 font-serif ">MUSIC</h1>
      <div className="flex flex-wrap xs:w-[250px] sm:w-[300px] md:w-[900px] md:m-auto sm:m-10 my-10">
        {productsArr.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
