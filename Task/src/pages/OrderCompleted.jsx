// import React from 'react'
import { Link } from "react-router";
import { Check } from "lucide-react";

const OrderCompleted = () => {
  return (
    <main className="min-h-[calc(100vh-6rem)] w-full flex justify-center items-center">
      <div className="h-115 w-[35%] flex flex-col gap-5 py-6 items-center border border-gray-200 shadow-lg rounded-lg">
        <Check className="h-14 w-14 p-2 text-green-600 bg-green-200 rounded-full" />
        <h1 className="font-bold text-3xl">Order Placed!</h1>
        <p>Thanks, Naman. Your order is confirmed.</p>

        <div className="flex gap-6 mt-3">
          <div className="bg-gray-200 rounded-md px-3 py-1">
            <h4 className="text-sm text-gray-500">ORDER ID</h4>
            <p>#SS-58213</p>
          </div>
          <div className="bg-gray-200 rounded-md px-3 py-1">
            <h4>TOTAL PAID</h4>
            <p>₹50,000</p>
          </div>
          <div className="bg-gray-200 rounded-md px-3 py-1">
            <h4>ARRIVES BY</h4>
            <p>Sun, 4 Oct</p>
          </div>
        </div>
        <div className="w-full px-9 mt-4">
          <div className="flex items-center justify-between">
            <h2>IPhone 13 Pro x1</h2>
            <p>₹48,000</p>
          </div>
          <div className="flex items-center justify-between">
            <h2>Wallet x2</h2>
            <p>₹2000</p>
          </div>
        </div>
        <div className="flex gap-5 mt-3">
          <Link to="/" className="bg-[#4338ca] text-white px-10 py-2 rounded">
            Continue Shopping
          </Link>
          <Link
            to="/cart"
            className="bg-white text-black border border-gray-300 px-10 py-2 rounded"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OrderCompleted;
