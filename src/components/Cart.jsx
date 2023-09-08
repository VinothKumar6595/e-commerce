import React, { useContext, useEffect, useState } from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CartContext from "../Store/Cart-Context";

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

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
  const [filteredArr, setFilteredArr] = useState(ctx.cartItems);
  const removeListHandler = (title) => {
    setFilteredArr((prev) =>
      prev.filter((item) => {
        return item.title !== title;
      })
    );
  };

  return (
    <div className="h-[700px] w-[500px] bg-gray-200 absolute top-16 right-0 ">
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
            className="flex justify-between mt-5 font-bold "
          >
            <span className="flex w-64 flex-wrap">
              <img src={item.imageUrl} width="50px" className="ml-2 mr-2" />{" "}
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
                  removeListHandler(item.title);
                }}
                className="bg-red-500 p-1.5 rounded-md ml-2 text-sm"
              >
                REMOVE
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
