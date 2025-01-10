import React, { useState } from 'react';
import { addProduct } from '../../utils/productService';

export default function ProductForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        prices: {
            withoutShaker: '',
            withShakerAndLights: ''
        },
        category: '',
    });
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('price')) {
            setFormData(prev => ({
                ...prev,
                prices: {
                    ...prev.prices,
                    [name.replace('price_', '')]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Validaciones
            if (!formData.name || !formData.description || !formData.category) {
                throw new Error('Please fill in all required fields');
            }
            if (!formData.prices.withoutShaker || !formData.prices.withShakerAndLights) {
                throw new Error('Please enter both prices');
            }
            if (!image) {
                throw new Error('Please select an image');
            }

            // Convertir precios a números
            const productData = {
                ...formData,
                prices: {
                    withoutShaker: parseFloat(formData.prices.withoutShaker),
                    withShakerAndLights: parseFloat(formData.prices.withShakerAndLights)
                }
            };

            await addProduct(productData, image);
            setSuccess('Product added successfully!');
            
            // Limpiar el formulario
            setFormData({
                name: '',
                description: '',
                prices: {
                    withoutShaker: '',
                    withShakerAndLights: ''
                },
                category: '',
            });
            setImage(null);
            
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-belvina text-darkblue mb-6">Add New Product</h2>
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            
            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-darkblue mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-darkblue rounded"
                        disabled={loading}
                    />
                </div>

                <div>
                    <label className="block text-darkblue mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-darkblue rounded"
                        rows="4"
                        disabled={loading}
                    />
                </div>

                <div>
                    <label className="block text-darkblue mb-2">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-darkblue rounded"
                        disabled={loading}
                    >
                        <option value="">Select a category</option>
                        <option value="madeToOrder">Made to Order</option>
                        <option value="cakeToppers">Cake Toppers</option>
                        <option value="banners">Banners</option>
                        <option value="letters">Letters</option>
                        <option value="favors">Favors</option>
                        <option value="car">Car</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-darkblue mb-2">Price (Without Shaker)</label>
                        <input
                            type="number"
                            name="price_withoutShaker"
                            value={formData.prices.withoutShaker}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-darkblue rounded"
                            step="0.01"
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className="block text-darkblue mb-2">Price (With Shaker & Lights)</label>
                        <input
                            type="number"
                            name="price_withShakerAndLights"
                            value={formData.prices.withShakerAndLights}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-darkblue rounded"
                            step="0.01"
                            disabled={loading}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-darkblue mb-2">Product Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full"
                        disabled={loading}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-darkorange to-orange text-beige py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Adding Product...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
}
