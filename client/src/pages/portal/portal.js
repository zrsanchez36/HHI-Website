import React, { useState } from 'react';
import './portal.scss'; 



const Portal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
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
                <button type="submit" className="portal__button">Sign In</button>
            </form>
        </div>
    );
};

export default Portal;