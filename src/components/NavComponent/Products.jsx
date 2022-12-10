import express from "express";
import React, { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    fetch('https://star-spark-pasta.glitch.me/api/products')
    .then(respose => express.response.json())
    .then(products => {
      
    })
  },)

  return (
    <>
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8 underline decoration-2 underline decoration-sky-600 hover:decoration-yellow-500">
          Product
        </h1>

        <div className="grid grid-cols-5 my-8 gap-24">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Products;
