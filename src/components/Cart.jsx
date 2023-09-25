import React, { useContext, useEffect, useState } from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CartContext from "../Store/Cart-Context";

const Cart = ({ setCartToggle }) => {
  const ctx = useContext(CartContext);
  console.log(ctx.cartItems);
  const [input, setInput] = useState(1);
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    setFilteredArr(ctx.cartItems);
  }, [ctx]);

  const [filteredArr, setFilteredArr] = useState([]);
  const removeListHandler = (item) => {
    setFilteredArr((prev) =>
      prev.filter((product) => {
        return item.title !== product.title;
      })
    );
    ctx.removeFromCart(item);
  };
  const totalAmount = ctx.cartItems.reduce((current, item) => {
    return current + item.price * item.Quantity;
  }, 0);
  return (
    <div className="h-[850px] w-[500px] bg-gray-300 absolute top-16 right-0 ">
      <div>
        <div className="absolute right-2">
          <button onClick={() => setCartToggle(false)}>
            <DisabledByDefaultIcon />
          </button>
        </div>
        <h1 className="text-2xl font-bold text-center mt-2">CART</h1>
      </div>
      <div className="flex justify-between  mt-5 font-bold ">
        <span className="ml-2 w-64">ITEM</span>
        <span className="w-12">PRICE</span>
        <span className="w-36">QUANTITY</span>
      </div>
      {filteredArr.map((item) => {
        return (
          <div
            key={Math.random()}
            className="flex justify-between mt-10 font-bold border-b-[3px] border-slate-950 "
          >
            <span className="flex w-64 flex-wrap align-middle">
              <img
                src={item.imageUrl}
                width="50px"
                className="ml-2 mr-2 mb-2"
              />{" "}
              {item.title}
            </span>
            <span className="w-12 text-center">{item.price}</span>
            <span className="w-36 ml-2">
              <input
                className="w-10 rounded text-center"
                onChange={inputChangeHandler}
                value={item.Quantity}
              ></input>
              <button
                onClick={() => {
                  removeListHandler(item);
                }}
                className="bg-red-500 p-1.5 rounded-md ml-2 text-sm"
              >
                REMOVE
              </button>
            </span>
          </div>
        );
      })}
      <div className="flex justify-end font-serif font-bold mt-10 mr-10">
        Total Amount: $ {totalAmount.toFixed(2)}
      </div>
      <div className="flex justify-center mt-10">
        <button className="p-3 bg-blue-400 rounded-xl" onClick={ctx.clearCart}>
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Cart;
