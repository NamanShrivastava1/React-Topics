// import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Products from "../components/Products";
import products from "../data/products";

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-6rem)] w-full bg-white flex gap-8 px-16 py-10">
      <div className="h-[78%] w-[30%] bg-white border border-gray-300 shadow-lg rounded-md px-8 py-4">
        <div className="flex justify-between mb-6">
          <h1>Filters</h1>
          <p>Clear all</p>
        </div>
        <p>CATEGORY</p>
        <div className="flex flex-col gap-2 mt-3">
          <Products items={["All Products", 200]} />
          <Products items={["Beauty", 20]} />
          <Products items={["Fragrance", 40]} />
          <Products items={["Furniture", 40]} />
          <Products items={["Laptops", 40]} />
          <Products items={["Mens Watches", 40]} />
          <Products items={["Smartphones", 40]} />
          <Products items={["Tablets", 40]} />

          <h2 className="mt-3">PRICE (₹)</h2>
          <div className="flex">
            <h1 className="border border-gray-400 px-3 py-1 rounded-md">
              10,000
            </h1>
            <p>-</p>
            <h1 className="border border-gray-400 px-3 py-1 rounded-md">
              20,000
            </h1>
          </div>

          <h2 className="mt-3">RATING</h2>
          <div className="flex gap-2">
            <input type="checkbox" />
            <h1>4* & Above</h1>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <h1>3* & Above</h1>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <h1>Any Rating</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[93%] px-8 py-4 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-bold text-2xl">Smartphones</h1>
          <div className="flex items-center gap-2">
            <p>Sort By</p>
            <p>Price: </p>
            <select className="border border-gray-400 px-3 py-1 rounded-md outline-none">
              <option>Low to High</option>
              <option>High to low</option>
            </select>
          </div>
        </div>
        <p>16 Results</p>
        <div className="flex gap-4 mt-5 mb-5">
          <h4 className="border border-gray-300 px-4 py-1 rounded-2xl">
            Category: Smartphone
          </h4>
          <h4 className="border border-gray-300 px-4 py-1 rounded-2xl">
            Rating 4+
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>

        <div className="w-82 flex items-center gap-2 mt-8 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
          <button className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors">
            <ChevronLeft size={20} />
          </button>

          <button className="w-10 h-10 rounded-md bg-[#4338ca] text-white font-medium">
            1
          </button>
          <button className="w-10 h-10 rounded-md hover:bg-gray-100 text-gray-700 font-medium transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-md hover:bg-gray-100 text-gray-700 font-medium transition-colors">
            3
          </button>

          <span className="text-gray-400 px-1">...</span>

          <button className="w-10 h-10 rounded-md hover:bg-gray-100 text-gray-700 font-medium transition-colors">
            10
          </button>

          <button className="p-2rounded-md hover:bg-gray-100 text-gray-600 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
