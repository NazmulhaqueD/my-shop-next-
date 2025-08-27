import getProduct from '@/app/lib/getProduct';
import Image from 'next/image';
import React from 'react';

const ProductDetailsPage = async ({ params }) => {

    const id = params.id;

    const product = await getProduct(id);
    console.log(product)

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Product Details</h1>
            <div className="border p-2 flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-xl overflow-hidden">

                {/* Product Image */}
                <div className="md:w-1/2 h-80 md:h-auto relative">
                    <Image
                        src={product.photo}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price}</p>
                    </div>

                    <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetailsPage;