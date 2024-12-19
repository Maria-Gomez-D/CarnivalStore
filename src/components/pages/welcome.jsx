import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate('/account');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/account');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    if (!user) return null;

    return (
        <div className="flex justify-center items-center min-h-screen bg-beige">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-center text-3xl text-darkblue mb-4 font-belvina">Welcome</h1>
                <p className="text-center text-darkblue mb-4 font-candara">
                    {user.email}
                </p>
                <button
                    onClick={handleSignOut}
                    className="w-full bg-gradient-to-r from-darkorange to-orange text-beige py-2 rounded-full font-candara transition-all duration-200 hover:opacity-80"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}