import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // If the user is already logged in, redirect to home
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);

 
    const handleLogin = async (e) => {
        e.preventDefault();

        //  simple form validation
        if (!username || !password) {
            setError('Username and password are required');
            return;
        }


        try {
            // connect to the server via backend login API
            const response = await axios.post('http://localhost:8080/api/auth/login', 
                { username, password }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Successfully log in the user and redirect to the home page.
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            } else {
                setError(response.data.message || 'Login failed');
            }

        } catch (err) {
            setError('Invalid username or password');  // Handle login failure
        }



    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 lg:p-10 space-y-6">
                <h2 className="text-2xl font-semibold text-center text-teal-600">
                    Login
                </h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;