// import React from 'react'
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <main className="h-98 w-65 flex flex-col rounded-md mt-5 border border-gray-200 shadow overflow-hidden">
      <div
        onClick={() => {
          navigate(`/productDetail/${product.id}`);
        }}
        className="h-1/2 bg-amber-100 px-4 pt-3"
      >
        <div className="flex items-center justify-between">
          <h1 className="bg-red-600 text-white px-1 py-1 rounded-md">-8%</h1>
          <Heart className="h-7 w-7 p-1 rounded-full bg-white" />
        </div>
      </div>
      <div className="pl-6">
        <h2 className="mt-3">{product.brand}</h2>
        <h4>{product.name}</h4>
        <div className="flex mt-2 gap-2">
          <Star />
          <p>{product.rating}</p>
        </div>
        <div className="flex gap-5 mt-2">
          <h1>₹{product.price}</h1>
          <h2 className="line-through">{product.originalPrice}</h2>
        </div>
        <button
          onClick={() => {
            navigate(`/cart`);
          }}
          className="bg-[#4338ca] text-white px-16 py-3 mt-3 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
};

export default ProductCard;
