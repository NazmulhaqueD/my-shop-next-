
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "High quality sound with noise cancellation.",
        price: "$120",
        image: "https://i.postimg.cc/bJ8Rb4Z1/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash.jpg",
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Track your fitness and stay connected.",
        price: "$90",
        image: "https://i.postimg.cc/R0x152Q2/infino-photography-Kjs-RBYfj9h-A-unsplash.jpg",
    },
    {
        id: 3,
        name: "Gaming Mouse",
        description: "Ergonomic design with customizable buttons.",
        price: "$45",
        image: "https://i.postimg.cc/50NCfJHK/ahmed-helal-t1-Cfe-IOl-GRk-unsplash.jpg",
    },
];

export default function ProductHighlights() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                    Featured Products
                </h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col"
                        >
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-lg mb-4 w-full h-48 object-cover"
                            />

                            {/* Product Info */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                            <p className="text-lg font-bold text-blue-600 mb-4">
                                {product.price}
                            </p>

                            {/* View Details Button */}
                            <Link
                                href={`/products/${product.id}`}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
