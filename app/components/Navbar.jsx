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
                <Link href="/dashboard" className="hover:text-blue-600">
                    Dashboard
                </Link>
                <Link href="/login" className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold">
                    Login
                </Link>
            </div>
        </nav>
    );
}
