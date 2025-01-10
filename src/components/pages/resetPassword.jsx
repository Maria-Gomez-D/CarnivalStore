import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '../../../firebase';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const oobCode = searchParams.get('oobCode');

    useEffect(() => {
        const verifyCode = async () => {
            if (!oobCode) {
                setError('Invalid password reset link');
                return;
            }

            try {
                setLoading(true);
                // Verificar el código y obtener el email
                const email = await verifyPasswordResetCode(auth, oobCode);
                setEmail(email);
            } catch (error) {
                console.error('Error verifying reset code:', error);
                setError('This password reset link is invalid or has expired. Please request a new one.');
            } finally {
                setLoading(false);
            }
        };

        verifyCode();
    }, [oobCode]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setPassword('');
            setConfirmPassword('');
            return;
        }

        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            setPassword('');
            setConfirmPassword('');
            return;
        }

        try {
            setLoading(true);
            setError('');
            
            await confirmPasswordReset(auth, oobCode, password);
            navigate('/password-changed');
        } catch (error) {
            console.error('Error resetting password:', error);
            setError(error.message);
            setPassword('');
            setConfirmPassword('');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-beige">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">
                    <p className="text-darkblue font-candara">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-beige">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-center text-3xl text-darkblue mb-4 font-belvina">Reset Password</h1>
                
                {email && (
                    <p className="text-center text-gray-600 mb-4 font-candara">
                        Resetting password for {email}
                    </p>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="password" className="block text-darkblue font-candara mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
                            disabled={loading}
                            minLength={6}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-darkblue font-candara mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
                            disabled={loading}
                            minLength={6}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-darkorange to-orange text-beige py-2 rounded-md hover:opacity-90 transition-opacity font-candara disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Resetting Password...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
}
