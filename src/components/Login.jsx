import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Store/Cart-Context";

const Login = () => {
  const navigate = useNavigate();
  const ctx = useContext(CartContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAk_e3NbGKya1-s6hMLpBKK6mk5Ccf3tFU",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          ctx.login(data.idToken);
          navigate("/store");
        });
      } else {
        res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
  };
  return (
    <div className="bg-gray-200 h-[960px] ">
      <div className="w-full shadow-md flex items-center pl-2">
        <h1 className="text-3xl font-bold font-serif">E-Commerce</h1>
        <ul className="flex w-96 justify-around m-auto h-16 items-center font-bold">
          <li className="hover:cursor-pointer">
            <Link to="/Home">Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/store">Store</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/auth">Log In</Link>
          </li>
        </ul>
      </div>
      <div>
        <form
          className="flex flex-col bg-slate-400 w-1/4 m-auto mt-64 rounded-md"
          onSubmit={formSubmitHandler}
        >
          <h1 className="text-2xl font-sans font-bold m-auto mt-6">LOGIN</h1>
          <label className="m-auto mt-6 ml-24 font-semibold">E-Mail</label>
          <input
            type="email"
            className="w-72 m-auto mt-2 rounded-lg h-10 pl-2"
            ref={emailInputRef}
          />
          <label className="m-auto mt-6 ml-24 font-semibold ">Password</label>
          <input
            type="password"
            className="w-72 m-auto mt-2 rounded-lg h-10 pl-2"
            ref={passwordInputRef}
          />
          <button className="mt-6 mb-4 bg-gray-600 w-1/4 m-auto p-2 rounded-lg text-white hover:bg-white hover:text-black">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
