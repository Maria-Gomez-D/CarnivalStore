import React from "react";
import ProductData from "../../assets/products/productData.js"; 


export default function newProducts() {
    
    return (
        <div className="mt-14 mb-12"> 
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <h1 className="text-3xl font-belvina text-darkblue">New to the Shop</h1>
                </div>
                {/* Body */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center"> 
                        {ProductData.map((data) => (
                            <div key={data.id} className="w-56 h-56 overflow-hidden flex flex-col items-center">
                                <img src={data.img} alt={`Product ${data.id}`} className="w-full h-full object-cover" />
                                <h2 className="text-darkblue font-candara mt-2 text-left">{data.description}</h2>
                                <p className="text-darkblue font-candara mt-2 text-left">CAD ${data.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
