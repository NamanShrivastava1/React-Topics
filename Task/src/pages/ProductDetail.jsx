import { Link } from "react-router";
import ReviewCard from "../components/ReviewCard";
import SimilarProductCard from "../components/SimilarProducts";

const reviews = [
  {
    name: "Rahul Sharma",
    date: "18 Sep 2026",
    rating: 5,
    review: "The camera quality is really good and the phone feels premium.",
  },
  {
    name: "Aman Verma",
    date: "14 Sep 2026",
    rating: 4,
    review: "Performance is smooth and the display looks great.",
  },
  {
    name: "Priya Singh",
    date: "10 Sep 2026",
    rating: 4,
    review: "Good phone overall. Battery backup could have been better.",
  },
];

const products = [
  {
    name: "iPhone X",
    price: "₹74,699",
    bgColor: "bg-blue-50",
  },
  {
    name: "Samsung Galaxy S10",
    price: "₹58,099",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Oppo F19 Pro+",
    price: "₹33,199",
    bgColor: "bg-purple-50",
  },
  {
    name: "Vivo X21",
    price: "₹24,899",
    bgColor: "bg-green-50",
  },
];

const ProductDetail = () => {
  return (
    <main className="w-262.5 mx-auto mt-6 pb-12">
      <div className="text-sm text-gray-500 mb-6">
        <span className="text-blue-600">Home</span>
        <span className="mx-2">/</span>
        <span className="text-blue-600">Smartphones</span>
        <span className="mx-2">/</span>
        <span className="text-gray-800">iPhone 13 Pro</span>
      </div>

      <div className="flex gap-8">
        <div className="w-117.5">
          <div className="h-100 border border-gray-200 rounded-lg flex items-center justify-center bg-white"></div>

          <div className="flex gap-3 mt-4">
            <div className="w-26.25 h-18.75 border-2 border-blue-500 rounded-md bg-gray-50"></div>
            <div className="w-26.25 h-18.75 border border-gray-200 rounded-md bg-gray-100"></div>
            <div className="w-26.25 h-18.75 border border-gray-200 rounded-md bg-blue-50"></div>
            <div className="w-26.25 h-18.75 border border-gray-200 rounded-md bg-gray-50"></div>
          </div>
        </div>

        <div className="w-125 border border-gray-200 rounded-lg p-6">
          <p className="text-xs text-blue-600 font-semibold">SMARTPHONE</p>

          <h1 className="text-3xl font-bold mt-2">iPhone 13 Pro</h1>

          <div className="flex items-center gap-3 mt-3">
            <p className="text-sm text-gray-600">Apple</p>
            <span className="text-gray-300">|</span>
            <p className="text-sm">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 font-semibold">4.4</span>
            </p>
            <p className="text-sm text-gray-500">3 reviews</p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold">₹91,299</h2>
              <span className="text-sm text-gray-400 line-through">
                ₹99,237
              </span>
            </div>

            <p className="text-sm text-green-600 mt-1">You save ₹7,938</p>
          </div>

          <div className="mt-5">
            <span className="text-sm text-red-500">Only 3 left in stock</span>
          </div>

          <p className="text-sm text-gray-600 leading-6 mt-5">
            Experience a powerful smartphone with a 6.1-inch display, advanced
            camera system and all-day battery. Perfect for everyday use,
            photography and entertainment.
          </p>

          <div className="border-t border-gray-200 mt-5"></div>

          <div className="mt-5">
            <p className="text-sm font-semibold">Quantity</p>
            <div className="flex items-center mt-2 border border-gray-300 rounded-md w-31.25 h-10">
              <button className="w-10 text-lg">-</button>
              <p className="w-11.25 text-center">1</p>
              <button className="w-10 text-lg">+</button>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <Link
              to="/cart"
              className="h-11 pl-26 pt-2 flex-1 bg-blue-600 text-white rounded-md"
            >
              Add to Cart
            </Link>

            <button className="h-11 w-32.5 border border-blue-600 text-blue-600 rounded-md">
              Add Wishlist
            </button>
          </div>
        </div>
      </div>
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Customer Reviews</h2>

          <button className="text-sm text-blue-600">Write a review</button>
        </div>

        <div className="flex gap-5 mt-5">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              date={review.date}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">You might also like</h2>

        <div className="flex gap-5 mt-5">
          {products.map((product, index) => (
            <SimilarProductCard
              key={index}
              name={product.name}
              price={product.price}
              bgColor={product.bgColor}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
