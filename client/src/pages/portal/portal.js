import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './portal.scss';

const Portal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate(); // Hook for redirection

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');
        try {
            const response = await axios.post('http://localhost:8080/login', { email, password });
            console.log('Login successful:', response.data);
            // Store the token in localStorage
            localStorage.setItem('token', response.data.token);
            // Redirect to the AdminDashboard
            navigate('/adminDashboard'); 
        } catch (error) {
            console.error('Login error:', error);
            setLoginError('Failed to login. Please check your credentials.');
        }
    };

    const handleGoogleSignIn = () => {
        window.location.href = '/auth/google'; // Redirect to Google Sign-In
    };

    return (
        <div className="portal">
            <form onSubmit={handleSubmit} className="portal__form">
                <h1 className="portal__title">Admin Portal</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="portal__input"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="portal__input"
                />
                {loginError && <div className="portal__error">{loginError}</div>}
                <button type="button" onClick={handleGoogleSignIn} className="portal__button portal__button--google">
                    Sign In with Google
                </button>
            </form>
        </div>
    );
};

export default Portal;
