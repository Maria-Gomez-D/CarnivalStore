import React from 'react';
import ProductList from '../products/ProductList';

export default function CakeToppers() {
    return (
        <div>
            <h1 className="text-4xl font-belvina text-center text-darkblue my-8">Cake Toppers</h1>
            <ProductList category="cakeToppers" />
        </div>
    );
}
