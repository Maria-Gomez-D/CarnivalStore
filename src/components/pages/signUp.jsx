import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase"; 
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created successfully:", userCredential.user.email);
            navigate('/welcome');
        } catch (error) {
            console.error("Signup error:", error);
            setError(error.message || "Failed to create account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-beige">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-center text-3xl text-darkblue mb-4 font-belvina">Sign Up</h1>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <span className="block sm:inline">{error}</span>
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
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                    <p className="mt-4 text-center text-darkblue font-candara">
                        Already have an account?{" "}
                        <Link to="/account" className="text-darkorange hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}