import { useState } from "react";

const PaymentPage = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="min-h-screen max-w-250 text-black">
      <main className="w-[87%] mx-auto py-6 px-4 mt-13">
        <div className="grid grid-cols-[1fr_269px] gap-5">
          <div>
            <div className="bg-white border h-15 border-gray-200 rounded-lg px-4 py-3 mb-4">
              <div className="flex items-center w-full">
                <div className="flex items-center">
                  <div
                    className={`h-7.5 w-7.5 rounded-full text-white flex items-center justify-center text-[12px] ${
                      step > 1
                        ? "bg-green-600"
                        : step === 1
                          ? "bg-[#4f46e5]"
                          : "border border-gray-300 bg-white text-gray-500"
                    }`}
                  >
                    {step > 1 ? "✓" : "1"}
                  </div>
                  <span
                    className={`ml-2 text-[12px] ${
                      step === 1
                        ? "font-semibold text-[#4338ca]"
                        : step > 1
                          ? "font-medium"
                          : "text-gray-500"
                    }`}
                  >
                    Address
                  </span>
                </div>

                <div
                  className={`w-75 h-px mx-3 ${step > 1 ? "bg-green-600" : "bg-gray-200"}`}
                ></div>
                <div className="flex items-center">
                  <div
                    className={`h-7.5 w-7.5 rounded-full flex items-center justify-center text-[12px] ${
                      step > 2
                        ? "bg-green-600 text-white"
                        : step === 2
                          ? "bg-[#4f46e5] text-white"
                          : "border border-gray-300 text-gray-500"
                    }`}
                  >
                    {step > 2 ? "✓" : "2"}
                  </div>
                  <span
                    className={`ml-2 text-[12px] ${
                      step === 2
                        ? "font-semibold text-[#4338ca]"
                        : step > 2
                          ? "font-medium"
                          : "text-gray-500"
                    }`}
                  >
                    Payment
                  </span>
                </div>

                <div
                  className={`w-75 h-px mx-3 ${step > 2 ? "bg-green-600" : "bg-gray-200"}`}
                ></div>
                <div className="flex items-center">
                  <div
                    className={`w-7.5 h-7.5 rounded-full flex items-center justify-center text-[12px] ${
                      step === 3
                        ? "bg-[#4f46e5] text-white"
                        : "border border-gray-300 text-gray-500"
                    }`}
                  >
                    3
                  </div>
                  <span
                    className={`ml-2 text-[12px] ${
                      step === 3
                        ? "font-semibold text-[#4338ca]"
                        : "text-gray-500"
                    }`}
                  >
                    Review
                  </span>
                </div>
              </div>
            </div>
            {step === 1 && (
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h2 className="text-[15px] font-bold mb-4">Delivery address</h2>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-[11px] font-medium mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      defaultValue="Emily Johnson"
                      className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium mb-1">
                      Phone number
                    </label>
                    <input
                      type="text"
                      defaultValue="9876543210"
                      className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="block text-[11px] font-medium mb-1">
                    Address line 1
                  </label>
                  <input
                    type="text"
                    defaultValue="42 MG Road"
                    className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <label className="block text-[11px] font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      defaultValue="Bengaluru"
                      className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      defaultValue="Karnataka"
                      className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      defaultValue="560001"
                      className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-[11px] font-medium mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    defaultValue="India"
                    className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="h-9 px-5 rounded-md bg-[#4f46e5] text-white text-[11px] font-medium"
                  >
                    Continue to payment →
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h2 className="text-[15px] font-bold mb-3">Payment method</h2>

                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`h-9.75 border rounded-lg px-3 flex items-center justify-between cursor-pointer mb-2 ${
                    paymentMethod === "cod"
                      ? "border-[#4f46e5] bg-[#f8f8ff]"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-3.25 h-3.25 rounded-full border flex items-center justify-center mr-3 ${
                        paymentMethod === "cod"
                          ? "border-[#4f46e5]"
                          : "border-gray-400"
                      }`}
                    >
                      {paymentMethod === "cod" && (
                        <div className="w-1.75 h-1.75 rounded-full bg-[#4f46e5]"></div>
                      )}
                    </div>
                    <span className="text-[12px]">Cash on delivery</span>
                  </div>
                  <span className="text-[10px] text-gray-400">
                    Pay when it arrives
                  </span>
                </div>

                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`border rounded-lg px-3 py-2 cursor-pointer ${
                    paymentMethod === "card"
                      ? "border-[#4f46e5] bg-[#f8f8ff]"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`w-3.25 h-3.25 rounded-full border flex items-center justify-center mr-3 ${
                          paymentMethod === "card"
                            ? "border-[#4f46e5]"
                            : "border-gray-400"
                        }`}
                      >
                        {paymentMethod === "card" && (
                          <div className="w-1.75 h-1.75 rounded-full bg-[#4f46e5]"></div>
                        )}
                      </div>
                      <span className="text-[12px]">Credit / debit card</span>
                    </div>
                    <span className="text-[10px] text-gray-400">
                      Demo only, no real payment
                    </span>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="mt-2">
                      <label className="block text-[11px] font-medium mb-1">
                        Card number
                      </label>
                      <input
                        type="text"
                        defaultValue="4111 1111 1111 1111"
                        className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                      />

                      <div className="grid grid-cols-[1.4fr_0.6fr_0.6fr] gap-3 mt-2">
                        <div>
                          <label className="block text-[11px] font-medium mb-1">
                            Name on card
                          </label>
                          <input
                            type="text"
                            defaultValue="Emily Johnson"
                            className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium mb-1">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            defaultValue="13/27"
                            className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium mb-1">
                            CVV
                          </label>
                          <input
                            type="password"
                            defaultValue="123"
                            className="w-full h-9 border border-gray-200 rounded-md px-3 text-[11px] outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  onClick={() => setPaymentMethod("upi")}
                  className={`h-9.75 border rounded-lg px-3 flex items-center justify-between cursor-pointer mt-2 ${
                    paymentMethod === "upi"
                      ? "border-[#4f46e5] bg-[#f8f8ff]"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-3.25 h-3.25 rounded-full border flex items-center justify-center mr-3 ${
                        paymentMethod === "upi"
                          ? "border-[#4f46e5]"
                          : "border-gray-400"
                      }`}
                    >
                      {paymentMethod === "upi" && (
                        <div className="w-1.75 h-1.75 rounded-full bg-[#4f46e5]"></div>
                      )}
                    </div>
                    <span className="text-[12px]">UPI</span>
                  </div>
                  <span className="text-[10px] text-gray-400">
                    e.g. name@bank
                  </span>
                </div>

                <div className="flex justify-between mt-5">
                  <button
                    onClick={() => setStep(1)}
                    className="h-9 px-4 border border-gray-200 rounded-md bg-white text-[11px] font-medium"
                  >
                    ← Back to address
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="h-9 px-5 rounded-md bg-[#4f46e5] text-white text-[11px] font-medium"
                  >
                    Continue to review →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h2 className="text-[15px] font-bold mb-4">
                  Review your order
                </h2>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-semibold">
                      Delivery address
                    </span>
                    <button
                      onClick={() => setStep(1)}
                      className="text-[10px] text-[#4f46e5]"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    <p className="text-[11px] font-medium">Emily Johnson</p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      42 MG Road, Near Brigade Road
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Bengaluru, Karnataka 560001
                    </p>
                    <p className="text-[11px] text-gray-500">India</p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      📞 9876543210
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-semibold">
                      Payment method
                    </span>
                    <button
                      onClick={() => setStep(2)}
                      className="text-[10px] text-[#4f46e5]"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    {paymentMethod === "card" && (
                      <div>
                        <p className="text-[11px] font-medium">
                          Credit / Debit Card
                        </p>
                        <p className="text-[11px] text-gray-500 mt-1">
                          •••• •••• •••• 1111
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Emily Johnson · Expires 13/27
                        </p>
                      </div>
                    )}
                    {paymentMethod === "cod" && (
                      <div>
                        <p className="text-[11px] font-medium">
                          Cash on Delivery
                        </p>
                        <p className="text-[11px] text-gray-500 mt-1">
                          Pay when the order arrives
                        </p>
                      </div>
                    )}
                    {paymentMethod === "upi" && (
                      <div>
                        <p className="text-[11px] font-medium">UPI</p>
                        <p className="text-[11px] text-gray-500 mt-1">
                          Pay via UPI
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-[#f8fafc] rounded-md p-3 mb-5">
                  <p className="text-[11px] text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Estimated delivery:
                    </span>{" "}
                    Oct 5 – Oct 7, 2026
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="h-9 px-4 border border-gray-200 rounded-md bg-white text-[11px] font-medium"
                  >
                    ← Back to payment
                  </button>
                  <button className="h-9 px-5 rounded-md bg-[#4f46e5] text-white text-[11px] font-medium">
                    Place order →
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 h-fit w-87.5">
            <h2 className="text-[15px] font-bold mb-3">Order summary</h2>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-8.5 h-8.5 bg-[#fff1f7] rounded-md mr-2"></div>
                <div>
                  <p className="text-[11px] font-medium">Vivo X21</p>
                  <p className="text-[9px] text-gray-500">Qty 1</p>
                </div>
              </div>
              <span className="text-[10px] font-medium">₹24,899</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-8.5 h-8.5 bg-[#eef2ff] rounded-md mr-2"></div>
                <div>
                  <p className="text-[11px] font-medium">Apple AirPods Pro</p>
                  <p className="text-[9px] text-gray-500">Qty 1</p>
                </div>
              </div>
              <span className="text-[10px] font-medium">₹20,749</span>
            </div>

            <div className="pt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-[10px] text-gray-500">Subtotal</span>
                <span className="text-[10px]">₹48,138</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-gray-500">Coupon SAVE10</span>
                <span className="text-[10px] text-green-600">−₹4,814</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-gray-500">Shipping</span>
                <span className="text-[10px] text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-gray-500">GST (18%)</span>
                <span className="text-[10px]">₹7,798</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 mt-3 pt-3">
              <span className="text-[12px] font-bold">Total</span>
              <span className="text-[17px] font-bold">₹51,122</span>
            </div>

            <div className="bg-[#f8fafc] rounded-md p-3 mt-3">
              <p className="text-[9px] text-gray-600 leading-4">
                <span className="font-semibold text-gray-800">Deliver to:</span>{" "}
                Emily Johnson, 42 MG Road, Bengaluru, Karnataka 560001 ·
                9876543210
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
