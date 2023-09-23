import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="m-auto mt-64 ml-[680px]">
      <h1 className="text-8xl font-mono font-bold  text-red-700">ERROR 404</h1>
      <p className="text-4xl font-bold ml-24 mt-24 ">Page Not Found</p>
      <div className="hover:cursor-pointer ml-56 mt-10 border-b-solid border-b-2 border-b-blue-400 w-12 font-bold">
        <Link to="/auth">Log In</Link>
      </div>
    </div>
  );
};

export default NotFound;
