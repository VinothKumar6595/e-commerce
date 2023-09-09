import React from "react";
import image from "../assets/image.jpg.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="w-full shadow-md flex items-center pl-2">
        <h1 className="text-3xl font-bold">E-Commerce</h1>
        <ul className="flex w-96 justify-around m-auto h-16 items-center font-bold">
          <li className="hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/">Store</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-center text-3xl font-bold font-serif mt-10">ABOUT</h1>
      <div className="mt-10 w-1/2  bg-gray-200 m-auto ">
        <img src={image} alt="ecommerce" className=" rounded-lg w-48 " />
        <p className="overflow">
          "Ecommerce" or "electronic commerce" is the trading of goods and
          services on the internet. It is your bustling city center or
          brick-and-mortar shop translated into zeroes and ones on the internet
          superhighway. An estimated 2.14 billion people worldwide buy goods and
          services online, and the number of Prime members shopping Amazon
          stores globally now tops 200 million. Ecommerce is one way people buy
          and sell things in retail. Some companies sell products online only,
          while other sellers use ecommerce as a part of a broader strategy that
          includes physical stores and other distribution channels. Either way,
          ecommerce allows startups, small businesses, and large companies to
          sell products at scale and reach customers across the world. An
          ecommerce website is your digital storefront on the internet. It
          facilitates the transaction between a buyer and seller. It is the
          virtual space where you showcase products, and online customers make
          selections. Your website acts as the product shelves, sales staff, and
          cash register of your online business channel. Businesses might create
          a branded store experience on a store like Amazon, build their own
          commerce site on a dedicated domain, or do it all for a multi-channel
          approach.
        </p>
      </div>
      <div>
        <footer className="mt-48 bg-slate-300 flex items-center justify-between   h-20 ">
          <div>
            <h1 className="text-3xl ml-72 font-serif font-bold">E-COMMERCE</h1>
          </div>
          <div className="mr-72 flex w-48 justify-between">
            <a href="http://www.twitter.com" target="_blank">
              <TwitterIcon />
            </a>
            <a href="http://www.youtube.com" target="_blank">
              <YouTubeIcon />
            </a>
            <a href="http://www.facebook.com" target="_blank">
              <FacebookIcon />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
