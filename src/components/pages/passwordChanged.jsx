import React from 'react';
import { Link } from 'react-router-dom';

export default function PasswordChanged() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-beige">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">
                <div className="mb-6">
                    <svg 
                        className="mx-auto h-16 w-16 text-green-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="text-3xl text-darkblue mb-4 font-belvina">
                    Password Changed Successfully!
                </h1>
                
                <p className="text-gray-600 mb-6 font-candara">
                    Your password has been successfully updated. You can now log in with your new password.
                </p>

                <Link
                    to="/account"
                    className="inline-block bg-gradient-to-r from-darkorange to-orange text-beige py-2 px-6 rounded-md hover:opacity-90 transition-opacity font-candara"
                >
                    Go to Login
                </Link>
            </div>
        </div>
    );
}
