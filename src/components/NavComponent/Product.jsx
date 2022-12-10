const Product = () => {
  return (
    <>
      <div>
        <img src="/images/peproni.jpg" alt="pizza " />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">Havana special</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4 text-amber-500 font-semibold ">
            Small
          </span>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span>$50</span>
          <button className=" bg-yellow-500 py-1 text-sm  px-4 rounded-full font-semibold text-cyan-600">
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
