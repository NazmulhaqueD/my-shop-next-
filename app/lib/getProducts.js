export default async function getProducts() {
    const result = await fetch("http://localhost:5000/products")

    return result.json();
}