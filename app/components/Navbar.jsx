// app/components/Navbar.jsx

"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            {/* Left: Logo */}
            <div className="text-2xl font-bold text-blue-600">
                <Link href="/">MyShop</Link>
            </div>

            {/* Right: Nav Links */}
            <div className="space-x-6">
                <Link href="/" className="hover:text-blue-600">
                    Home
                </Link>
                <Link href="/products" className="hover:text-blue-600">
                    Products
                </Link>
                <Link href="/login" className="hover:text-blue-600">
                    Login
                </Link>
                {/* পরে auth হলে এখানে Login এর বদলে Dashboard দেখাবে */}
            </div>
        </nav>
    );
}
