import React from 'react';
import Navbar from '../components/Navbar';

const ProductsLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='max-w-7xl mx-auto min-h-[80vh]'>
                {children}
            </main>
        </div>
    );
};

export default ProductsLayout;