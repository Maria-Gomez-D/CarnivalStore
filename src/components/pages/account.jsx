import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";

export default function Account() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!auth) {
            setError("Authentication service is not available");
            return;
        }
        if (email === "" || password === "") {
            setError("Please enter email and password.");
        } else {
            try {
                setLoading(true);
                setError("");
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/welcome');
            } catch (error) {
                console.error("Login error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email address first");
            return;
        }
        
        try {
            setLoading(true);
            setError("");
            
            const actionCodeSettings = {
                url: 'https://carnival-store.vercel.app/reset-password',
                handleCodeInApp: true
            };

            await sendPasswordResetEmail(auth, email, actionCodeSettings);
            setMessage("Password reset email sent! Please check your inbox.");
        } catch (error) {
            console.error("Password reset error:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-beige">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-center text-3xl text-darkblue mb-4 font-belvina">Login</h1>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                {message && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-darkblue font-candara mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-darkblue font-candara mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-darkorange to-orange text-beige py-2 rounded-md hover:opacity-90 transition-opacity font-candara disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            onClick={handleForgotPassword}
                            className="text-darkorange hover:underline font-candara"
                            disabled={loading}
                            type="button"
                        >
                            Forgot Password?
                        </button>
                        <Link to="/signUp" className="text-darkorange hover:underline font-candara">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}