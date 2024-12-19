import React from "react";
import '../../assets/fonts.css';

export default function Subscribe() {
    return (
        <div className="bg-fucsia/40 py-2">
            <div className="container text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    {/* Message */}
                    <div className="font-candara text-darkblue sm:text-left">
                        <h1>Stay in contact and get notified about new products and promotions</h1>
                    </div>
                    {/* Input */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-[200px] sm:w-[300px] rounded-full border border-darkblue/40 px-4 py-2 focus:outline-none focus:border-fucsia placeholder-darkblue/40 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
