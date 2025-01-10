import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';

// Lista de correos electrónicos de administradores
const ADMIN_EMAILS = ['tu-correo@ejemplo.com']; // Reemplaza con tu correo

export default function AdminRoute({ children }) {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user || !ADMIN_EMAILS.includes(user.email)) {
        return <Navigate to="/account" />;
    }

    return children;
}
