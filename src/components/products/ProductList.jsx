import React, { useEffect, useState } from 'react';
import { getAllProducts, getProductsByCategory } from '../../utils/productService';

export default function ProductList({ category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = category 
                    ? await getProductsByCategory(category)
                    : await getAllProducts();
                setProducts(data);
            } catch (err) {
                setError('Error loading products');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [category]);

    if (loading) return <div>Loading products...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (products.length === 0) return <div>No products found</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-belvina text-darkblue mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="space-y-2">
                            <p className="text-darkorange">
                                Without Shaker: ${product.prices.withoutShaker}
                            </p>
                            <p className="text-darkorange">
                                With Shaker & Lights: ${product.prices.withShakerAndLights}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
