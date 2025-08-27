import Link from "next/link";
import getProducts from "../lib/getProducts";
import Image from "next/image";


export default async function ProductsPage() {

    const allProducts = await getProducts();

    console.log(allProducts);


    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {allProducts?.map((product) => (
                    <div
                        key={product._id}
                        className=" rounded-2xl overflow-hidden shadow-lg shadow-gray-400 hover:shadow-xl hover:scale-105 transition-all duration-300  bg-white"
                    >
                        {/* Product Image */}
                        <div className="">
                            <Image
                                src={product.photo}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className="w-full h-60"
                            />
                        </div>

                        {/* Card Body */}
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-blue-600 font-bold text-xl">${product.price}</p>

                            <Link
                                href={`/products/${product._id}`}
                                className="mt-3 inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
