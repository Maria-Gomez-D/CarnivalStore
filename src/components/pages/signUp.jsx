import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase"; 
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Please enter email and password.");
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log(userCredential);
                navigate('/welcome');
            } catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-beige">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-center text-3xl text-darkblue mb-4 font-belvina">Sign Up</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
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
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-darkorange to-orange text-beige py-2 rounded-full font-candara transition-all duration-200 hover:opacity-80"
                    >
                        Sign Up
                    </button>
                    <div className="text-right my-2 text-orange">
                        <span>Already have an account? </span>
                        <Link to="/account" className="hover:text-darkorange hover:underline">LOG IN</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}