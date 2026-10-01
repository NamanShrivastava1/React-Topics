import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const cartItems = [
  {
    id: 1,
    name: "Vivo X21",
    price: 24899,
    quantity: 1,
    stock: "In stock",
    bg: "#fdf2f8",
  },
];
const wishlistItems = [
  {
    id: 4,
    name: "Samsung Galaxy S24",
    price: 74999,
    stock: "In stock",
    bg: "#f1f5f9",
  },
];

const Cart = () => {
  const [showWishlist, setShowWishlist] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const discount = Math.round(subtotal * 0.1);
  const gst = Math.round((subtotal - discount) * 0.18);
  const total = subtotal - discount + gst;

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-slate-50 px-12 py-8">
      <div className="mx-auto w-300">
        <h1 className="mb-7 text-3xl font-bold text-slate-900">Your bag</h1>

        <div className="mb-6 flex gap-7 border-b border-slate-200">
          <button
            onClick={() => setShowWishlist(false)}
            className={`pb-3 px-3 text-base font-semibold ${
              !showWishlist ? "border-b-2 text-[#4338ca]" : "text-slate-500"
            }`}
            style={!showWishlist ? { borderColor: "#4338ca" } : {}}
          >
            Cart ({cartItems.length + 1})
          </button>

          <button
            onClick={() => setShowWishlist(true)}
            className={`pb-3 px-3 text-base font-semibold ${
              showWishlist ? "border-b-2 text-[#4338ca]" : "text-slate-500"
            }`}
            style={showWishlist ? { borderColor: "#4338ca" } : {}}
          >
            Wishlist ({wishlistItems.length})
          </button>
        </div>
        {!showWishlist && (
          <div className="flex gap-7">
            <div className="w-195 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="grid grid-cols-[260px_120px_150px_1fr] border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[260px_120px_150px_1fr] items-center border-b border-slate-200 px-6 py-5"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="h-16 w-16 rounded-lg"
                      style={{ backgroundColor: item.bg }}
                    />
                    <div>
                      <h2 className="text-sm font-semibold text-slate-800">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.stock}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-800">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                  <div className="flex w-fit items-center rounded-lg border border-slate-200">
                    <button className="p-2 text-slate-700">
                      <Minus size={14} />
                    </button>
                    <span className="w-7 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button className="p-2 text-slate-700">
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-sm font-bold text-slate-800">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                    <button className="rounded-lg bg-red-50 p-2 text-red-500">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
              <Link
                to="/"
                className="flex items-center gap-1 px-6 py-4 text-sm font-medium"
                style={{ color: "#4338ca" }}
              >
                <ArrowLeft size={15} />
                Continue shopping
              </Link>
            </div>

            <div className="h-fit w-87.5 rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Order summary
              </h2>
              <p className="mb-2 text-sm font-medium text-slate-800">
                Coupon code
              </p>

              <div className="flex gap-2">
                <input
                  value="SAVE10"
                  readOnly
                  className="w-full rounded-lg border border-emerald-500 px-3 py-2 text-sm outline-none"
                />
                <button className="rounded-lg border border-slate-300 px-4 text-sm font-medium">
                  Remove
                </button>
              </div>
              {/* 
              <p className="mt-2 text-xs text-emerald-600">
                SAVE10 applied — 10% off
              </p> */}

              <div className="my-5 border-t border-slate-200" />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subtotal (4 items)</span>

                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Coupon discount</span>

                  <span className="text-emerald-600">
                    -₹{discount.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Shipping</span>

                  <span className="text-emerald-600">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">GST (18%)</span>

                  <span>₹{gst.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="my-5 border-t border-slate-200" />

              <div className="mb-5 flex items-center justify-between">
                <span className="text-lg font-bold">Total</span>

                <span className="text-2xl font-bold">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <Link
                to="/payment"
                className="w-full rounded-lg py-3 px-3 text-sm font-semibold text-white"
                style={{ backgroundColor: "#4338ca" }}
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        )}
        {showWishlist && (
          <div className="w-195 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Your Wishlist
              </h2>
            </div>
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-slate-200 px-6 py-5"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-16 w-16 rounded-lg"
                    style={{ backgroundColor: item.bg }}
                  />

                  <div>
                    <h2 className="text-sm font-semibold text-slate-800">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">{item.stock}</p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="rounded-lg px-4 py-2 text-sm font-medium text-white"
                    style={{ backgroundColor: "#4338ca" }}
                  >
                    Add to Cart
                  </button>

                  <button className="rounded-lg bg-red-50 p-2 text-red-500">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
            <button
              className="flex items-center gap-1 px-6 py-4 text-sm font-medium"
              style={{ color: "#4338ca" }}
              onClick={() => setShowWishlist(false)}
            >
              <ArrowLeft size={15} />
              Back to Cart
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
