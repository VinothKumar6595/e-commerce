import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full shadow-md flex items-center pl-2">
        <h1 className="text-3xl font-bold">E-Commerce</h1>
        <ul className="flex w-96 justify-around m-auto h-16 items-center font-bold">
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
        </ul>
        <button className="mr-10 px-4 py-2 hover:bg-gray-900 hover:text-white rounded-md bg-gray-200 text-black">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;