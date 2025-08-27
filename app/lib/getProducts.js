export default async function getProducts() {
    const result = await fetch("https://social-serve-server.vercel.app/products")

    return result.json();
}