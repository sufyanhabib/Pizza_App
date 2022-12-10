import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Index from "./NavComponent/Index";
import Product from "./NavComponent/Product";
import Cart from "./NavComponent/Cart";

export const Nav = () => {
  const cartStyle = {
    display: "flex",
    padding: "3px 10px",
    borderRadius: "50px",
    border: "2px solid #cbb"
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link to="/">
          <img style={{ height: 45 }} src="/images/logo.png" alt="" />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/Product ">Product</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle} className="bg-yellow-400">
                <span className="text-white ">10</span>
                <img className="ml-2 " src="/images/cart.png" alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
