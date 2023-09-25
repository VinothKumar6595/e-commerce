import React, { Fragment, useContext, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Reviews from "./Reviews";
import Header from "./Header";
import CartContext from "../Store/Cart-Context";

const dummyProducts = [
  {
    title: "Blue Shirt",
    price: 100,
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/m/o/t/l-st1-vebnor-original-imagmsyxhvkrfjgz.jpeg?q=70",
    image2:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/g/p/l-st1-vebnor-original-imagmsyxunkgztzw.jpeg?q=70",
    image3:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/6/o/m/l-st1-vebnor-original-imagmsyxyb29cun3.jpeg?q=70",
    image4:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/0/v/2/l-st1-vebnor-original-imagmsyx9gzugqzn.jpeg?q=70",
  },

  {
    title: "Sandal Shirt",
    price: 50,
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/z/x/y/l-st1-vebnor-original-imagn6bzam4rymhd.jpeg?q=70",
    image2:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/u/c/u/l-st1-vebnor-original-imagn6bzvrtgfzm3.jpeg?q=70",
    image3:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/b/y/h/l-st1-vebnor-original-imagn6bzy4ttmwe7.jpeg?q=70",
    image4:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/c/y/t/l-st1-vebnor-original-imagn6bzgvghthwh.jpeg?q=70",
  },

  {
    title: "Red Shirt",
    price: 70,
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/r/2/c/-original-imagt6zggysgg274.jpeg?q=70",
    image2:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/f/n/h/-original-imagt6zghk7g5gr4.jpeg?q=70",
    image3:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/m/u/f/-original-imagt6zgjzq2fgkv.jpeg?q=70",
    image4:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/f/v/g/-original-imagt6zgarxhcykq.jpeg?q=70",
  },

  {
    title: "Checked Shirt",
    price: 100,
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/l4d2ljk0/shirt/d/9/w/-original-imagfaezftczx3bf.jpeg?q=70",
    image2:
      "https://rukminim2.flixcart.com/image/832/832/kohigsw0/shirt/t/y/k/46-2032637-wrogn-original-imag2xfqjjrzbsdx.jpeg?q=70",
    image3:
      "https://rukminim2.flixcart.com/image/832/832/kohigsw0/shirt/2/u/l/46-2032637-wrogn-original-imag2xfqhgzh5dcj.jpeg?q=70",
    image4:
      "https://rukminim2.flixcart.com/image/832/832/l4d2ljk0/shirt/m/h/c/-original-imagfaez7bt8akgn.jpeg?q=70",
  },
];

const ProductDetails = () => {
  const params = useParams();
  const ctx = useContext(CartContext);
  console.log(params.productName);
  const product = dummyProducts.find(
    (products) => products.title === params.productName
  );
  console.log(product);

  const [image, setImage] = useState(product.imageUrl);
  const zoomImageHandler = (image) => {
    setImage(image);
  };

  const addToCartHandler = (item) => {
    ctx.addToCart({ ...item, Quantity: 1 });
  };

  return (
    <div className="bg-gray-200 h-[960px]">
      {/* <div className="w-full shadow-md flex items-center pl-2 bg-gray-400">
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
          <li className="hover:cursor-pointer">
            <Link to="/auth">Log In</Link>
          </li>
        </ul>
      </div> */}
      <Header />
      <h1 className="font-bold text-3xl mt-10 ml-24">Product Details</h1>
      <div className="flex">
        <div className="block h-12 w-24  mt-16 ml-24">
          <img
            src={product.imageUrl}
            alt="image1"
            className="m-1 hover:border-2 hover:border-blue-400"
            onMouseOver={() => zoomImageHandler(product.imageUrl)}
          />
          <img
            src={product.image2}
            alt="image2"
            className="m-1 hover:border-2 hover:border-blue-400"
            onMouseOver={() => zoomImageHandler(product.image2)}
          />
          <img
            src={product.image3}
            alt="image3"
            className="m-1 hover:border-2 hover:border-blue-400"
            onMouseOver={() => zoomImageHandler(product.image3)}
          />
          <img
            src={product.image4}
            alt="image4"
            className="m-1 hover:border-2 hover:border-blue-400"
            onMouseOver={() => zoomImageHandler(product.image4)}
          />
        </div>
        <div>
          <img src={image} alt="" className="w-96 h-[480px] mt-16 ml-10" />

          <button className="bg-gray-400 p-2.5 mr-40 mt-10 rounded-2xl w-32 hover:bg-black hover:text-white">
            Buy Now
          </button>
          <button
            className="bg-gray-400 p-2.5 mt-10 rounded-2xl w-32  hover:bg-black hover:text-white"
            onClick={() => addToCartHandler(product)}
          >
            Add To Cart
          </button>
        </div>

        <div className="flex flex-col mt-16 ml-48">
          <h1 className="text-3xl font-bold">Reviews & Ratings</h1>
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
