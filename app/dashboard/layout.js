
import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-5 space-y-5">
                <h1 className="text-xl font-bold"><Link href={'/'}>My Dashboard</Link></h1>
                <nav className="flex flex-col space-y-3">
                    <Link href="/dashboard" className="hover:text-blue-400">Profile</Link>
                    <Link href="/dashboard/addProducts" className="hover:text-blue-400">Add Product</Link>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-10 bg-gray-100">{children}</main>
        </div>
    );
};

export default DashboardLayout;


