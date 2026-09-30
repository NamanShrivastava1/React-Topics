// import React from 'react'
import { Search, Heart, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <main className="h-24 bg-white shadow drop-shadow-md border-b border-gray-300 flex items-center justify-between px-16">
      <div className="flex gap-8">
        <h1 className="text-black font-bold text-2xl">
          Shop<span className="text-[#4338ca]">Sphere</span>
        </h1>
        <div className="w-150 h-[60%] flex items-center gap-3 border border-stone-300 px-5 py-2 rounded-md bg-stone-100">
          <Search className="size-5" />
          <input
            className="w-full font-light placeholder:text-stone-400 focus:outline-none"
            type="text"
            placeholder="Search products, brands, categories"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <Heart />
        <ShoppingCart />
        <span className="text-gray-400">|</span>
        <div className=" flex gap-3">
          <div className="h-10 w-10 rounded-full bg-[#c7c3f6] text-[#4338ca] text-center">
            <h1 className="relative top-2">NS</h1>
          </div>
          <h2>Naman</h2>
          <ChevronDown />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
