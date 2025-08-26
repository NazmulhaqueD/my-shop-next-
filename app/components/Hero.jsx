
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">MyShop</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Discover the best products at the best price.
        </p>

        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
