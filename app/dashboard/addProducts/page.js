
"use client";

export default function AddProductPage() {



    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const photo = e.target.photo.value;
        const description = e.target.description.value;

        const productData = {
            name,
            price,
            photo,
            description
        }
        try {
            const res = await fetch("https://social-serve-server.vercel.app/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });

            const data = await res.json(); 
            alert("Product added successfully!");
            e.target.reset(); // form reset
        } catch (err) {
            console.error(err);
            alert("Failed to add product");
        }

        console.log(productData);

    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-5">Add Product</h2>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md max-w-md space-y-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="photo"
                    placeholder="Product photo url"
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full border p-2 rounded resize-none"
                    rows={10}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Product
                </button>
            </form>
        </div>
    );  
}
