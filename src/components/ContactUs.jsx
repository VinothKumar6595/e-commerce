import React, { Fragment, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartContext from "../Store/Cart-Context";

const ContactUs = () => {
  const ctx = useContext(CartContext);
  const [name, setName] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const [email, setEmail] = useState("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const [phone, setPhone] = useState("");
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const myObj = {
      name: name,
      email: email,
      phone: phone,
    };
    const response = await fetch(
      "https://e-commerce-6da0c-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(myObj),
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div className="bg-gray-200 h-[930px]">
      <div className="w-full shadow-md flex items-center pl-2">
        <h1 className="text-3xl font-bold">E-Commerce</h1>
        <ul className="flex w-96 justify-around m-auto h-16 items-center font-bold">
          <li className="hover:cursor-pointer">
            <NavLink
              className="active:border-solid active:border-b-2 active:border-blue-400"
              to="/Home"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:cursor-pointer">
            <NavLink
              className="active:border-solid active:border-b-2 active: border-blue-400"
              to="/store"
            >
              Store
            </NavLink>
          </li>
          <li className="hover:cursor-pointer">
            <NavLink
              className="active:border-solid active:border-b-2 active: border-blue-400"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="hover:cursor-pointer">
            <NavLink
              className="active:border-solid active:border-b-2 active:border-blue-400"
              to="/contactUs"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="hover:cursor-pointer bg-blue-300 p-2 rounded-lg">
            <Link to="/auth" onClick={ctx.isLoggedIn && ctx.logout}>
              {ctx.isLoggedIn ? "Log Out" : "Log In"}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <form
          className="flex flex-col w-[560px] m-auto mt-52 border-solid border-2 border-blue-400 p-10 rounded-2xl"
          onSubmit={formSubmitHandler}
        >
          <h2 className="text-2xl font-serif font-bold m-auto mt-10 mb-10  ">
            Get in Touch
          </h2>
          <label className="text-l font-serif font-bold ">Name</label>
          <input
            type="text"
            className=" h-8 rounded-lg shadow-lg  border-solid border-2 border-blue-400 mb-4"
            onChange={nameChangeHandler}
            value={name}
          />
          <label className="text-l font-serif font-bold ">Email Id</label>
          <input
            type="email"
            className=" h-8 rounded-lg shadow-lg border-solid border-2 border-blue-400 mb-4"
            onChange={emailChangeHandler}
            value={email}
          />
          <label className="text-l font-serif font-bold ">Phone Number</label>
          <input
            type="phone"
            className=" h-8 rounded-lg shadow-lg border-solid border-2 border-blue-400 mb-4"
            onChange={phoneChangeHandler}
            value={phone}
          />
          <button className=" bg-blue-400 text-white rounded-lg p-2.5 m-auto mt-4 w-36 flex  text-center justify-center align-middle hover:bg-gray-300 hover:text-blue-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
