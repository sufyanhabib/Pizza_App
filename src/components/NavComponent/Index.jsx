import React from "react";
import Products from "./Products";
const Index = () => {
  return (
    <>
      <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2 ml-10">
            <h6 className="text-lg mx-auto flex items-center ">
              <em>Are you Hungry</em>
              <img
                className="h-20 "
                src="/images/hungry-removebg-preview.png"
                alt=""
              />
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't wait!</h1>
            <button className="py-2 px-6 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-4">
              Order Now
            </button>
          </div>
          <div className="w-1/2 ml-20">
            <img className="w-4/5" src="/images/pizza.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <Products />
      </div>
    </>
  );
};
export default Index;
