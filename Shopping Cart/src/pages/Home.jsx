import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load products");
        }

        return response.json();
      })
      .then((data) => setProducts(data))
      .catch(() => setError("Products could not be loaded."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="border-b border-gray-300 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <h1 className="text-xl font-bold">Simple Store</h1>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <h1 className="mb-6 text-2xl font-bold">Products</h1>

        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col bg-white p-4">
                <div className="flex h-52 items-center justify-center border border-gray-200 p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h2 className="mt-4 line-clamp-2 min-h-12 font-semibold">
                  {product.title}
                </h2>
                <p className="mt-3 text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;