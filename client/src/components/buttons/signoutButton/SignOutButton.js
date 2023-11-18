import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignOutButton = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            // Notify the backend about the logout
            await axios.get('http://localhost:8080/logout');
            
            // Clear the authentication token from localStorage or context
            localStorage.removeItem('token');
            
            // Redirect to the login page or home page
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
            // Handle error (show message, etc.)
        }
    };

    return (
        <button onClick={handleSignOut}>Sign Out</button>
    );
};

export default SignOutButton;
