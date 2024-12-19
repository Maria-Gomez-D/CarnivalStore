import React from "react";
import ProductData from "../../assets/products/productData.js";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Collections({ onAddToCart }) {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <h1 className="text-3xl font-belvina text-darkblue">Collections</h1>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">
                        {ProductData.map((data) => (
                            <div key={data.id} className="w-56 h-56 overflow-hidden flex flex-col items-center">
                                <img src={data.img} alt={`Product ${data.id}`} className="w-full h-full object-cover" />
                                <h2 className="text-darkblue font-candara mt-2 text-left">{data.description}</h2>
                                <p className="text-darkblue font-candara text-left">CAD ${data.price}</p>
                                <button
                                    onClick={() => onAddToCart(data)}
                                    className="mt-2 font-candara bg-gradient-to-r from-darkorange to-orange transition-all duration-200 text-beige py-1 px-4 rounded-full flex items-center gap-3 group"
                                >
                                    <span className="group-hover:block hidden transition-all duration-200">Add to Cart</span>
                                    <RiShoppingCart2Line className="text-xl text-beige drop-shadow-sm cursor-pointer" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
