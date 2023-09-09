import React from "react";
import { Link } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store";

const products = [
  { title: "Mobiles,Computers" },
  { title: "TV,Appliances,electronics" },
  { title: "Men's Fashion" },
  { title: "Women's Fashion" },
  { title: "Beauty,Health,Groceries" },
  { title: "Sports,Fitness,bags,Luggages" },
];

const productsList = products.map((item) => {
  return (
    <li className="flex justify-between w-96 m-auto p-2 font-bold items-center border-b-[3px] border-slate-950 ">
      {item.title}
      <button className=" bg-blue-300 p-2 rounded-lg font-normal">
        Buy Now
      </button>
    </li>
  );
});

const Home = () => {
  return (
    <div>
      <div className="w-full shadow-md flex items-center pl-2">
        <h1 className="text-3xl font-bold font-serif">E-Commerce</h1>
        <ul className="flex w-96 justify-around m-auto h-16 items-center font-bold">
          <li className="hover:cursor-pointer">
            <Link to="/Home">Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/">Store</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="w-full bg-gray-100 h-96">
        <h1 className=" font-serif font-extrabold text-7xl flex justify-center pt-10">
          My E-Commerce Website
        </h1>
        <button className="flex ml-[860px] mt-10 p-7 rounded-lg text-2xl border-solid border-2 border-indigo-600 ">
          Buy Products
        </button>
        <button className=" bg-slate-500 ml-[920px] mt-10 p-7 rounded-full ">
          <StoreIcon />
        </button>
      </div>
      <h1 className="text-2xl flex  justify-center mt-10 font-serif font-extrabold">
        OUR PRODUCTS
      </h1>
      <ul className="flex flex-col mt-10 p-7 ">{productsList}</ul>
      <footer className="bg-gray-200 h-20 flex items-center text-2xl font-serif font-bold">
        The E-Commerce Website
      </footer>
    </div>
  );
};

export default Home;
