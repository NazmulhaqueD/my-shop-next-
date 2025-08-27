export default async function getProduct(id) {
    const result = await fetch(`https://social-serve-server.vercel.app/products/${id}`)
    console.log(id);

    return result.json();
}