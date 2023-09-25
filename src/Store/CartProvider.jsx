import React, { useEffect, useState } from "react";
import CartContext from "./Cart-Context";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const initialEndPoint = localStorage.getItem("endpoints");
  const [endPoint, setEndPoint] = useState(initialEndPoint);

  const isLoggedIn = !!token;
  const navaigate = useNavigate();
  const url = `https://crudcrud.com/api/967fddb65f00425d86213fbaa0c0f53e${endPoint}`;

  const cartHandler = (item) => {
    // const existingItemIndex = cartItems.findIndex((color) => {
    //   return item.title === color.title;
    // });
    // const existingItem = cartItems[existingItemIndex];

    // let updatedItem;
    // let updatedItems;
    fetch(url).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          const existingItemIndex = data.findIndex((colors) => {
            return colors.title === item.title;
          });
          const existingItem = data[existingItemIndex];

          let updatedItem;

          let updatedItems;
          if (existingItem) {
            const id = existingItem._id;
            console.log(id);
            updatedItem = {
              ...item,
              // title: existingItem.title,
              // price: existingItem.price,
              // imageUrl: existingItem.imageUrl,
              Quantity: Number(existingItem.Quantity) + Number(item.Quantity),
            };
            console.log(updatedItem);
            updatedItems = [...cartItems];
            updatedItems[existingItemIndex] = updatedItem;
            fetch(`${url}/${id}`, {
              method: "PUT",
              body: JSON.stringify(updatedItem),
              headers: { "Content-Type": "application/json" },
            }).then((res) => {
              if (res.ok) {
                fetch(url).then((res) => {
                  if (res.ok) {
                    res.json().then((data) => {
                      console.log(data);
                      setCartItems(data);
                    });
                  }
                });
                console.log("Updated SuccessFully");
              } else {
                console.log("Error Updating Data");
              }
            });
          } else {
            fetch(url, {
              method: "POST",
              body: JSON.stringify(item),
              headers: { "Content-Type": "application/json" },
            }).then((res) => {
              if (res.ok) {
                res.json().then((data) => {
                  console.log(data);
                  setCartItems((prev) => {
                    return [...prev, data];
                  });
                });
                console.log("Added To Cart Successfully");
              } else {
                console.log("Error Adding to cart");
              }
            });
          }
        });
      }
    });
  };

  console.log(cartItems);

  const removeCartHandler = async (item) => {
    const res = await fetch(url);
    const data = await res.json();
    const existingItemIndex = data.findIndex((colors) => {
      return colors.title === item.title;
    });

    const existingItem = data[existingItemIndex];

    if (existingItem) {
      const id = existingItem._id;
      console.log(id);
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      alert(`${existingItem.title} Deleted from Cart`);
    }
    setCartItems(
      cartItems.filter((cartItem) => {
        return cartItem.title !== item.title;
      })
    );
  };

  const clearCartHandler = () => {
    fetch(url).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          data.map((item) => {
            fetch(`${url}/${item._id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            }).then((res) => {
              if (res.ok) {
                console.log("Deleted SuccessFully");
              } else {
                console.log("Error Deleting");
              }
            });
          });
        });
      } else {
        console.log("Error Getting Data");
      }
    });
    setCartItems([]);
    alert("Thanks for the purchase");
  };

  const loginHandler = (token, end) => {
    localStorage.setItem("token", token);
    localStorage.setItem("endpoints", end);
    alert("LOGIN SUCCESSFULL");
    setEndPoint(end);
    setToken(token);
    fetch(url).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCartItems(data);
        });
      }
    });
  };

  const logoutHandler = () => {
    localStorage.clear();
    navaigate("/auth");
    alert("User Logged Out");
    window.location.reload();
  };

  const cartContext = {
    url: url,
    token: token,
    isLoggedIn: isLoggedIn,
    cartItems: cartItems,
    login: loginHandler,
    logout: logoutHandler,
    addToCart: cartHandler,
    removeFromCart: removeCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
