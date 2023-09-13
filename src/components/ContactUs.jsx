import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
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
    <Fragment>
      <div className="w-full shadow-md flex items-center pl-2">
        <h1 className="text-3xl font-bold">E-Commerce</h1>
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
          <li className="hover:cursor-pointer">
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <form
          className="flex flex-col w-96 m-auto mt-52"
          onSubmit={formSubmitHandler}
        >
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
    </Fragment>
  );
};

export default ContactUs;
