import React from 'react';
import './adminDashboard.scss'; // SCSS file for styling

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <header className="admin-dashboard__header">
                <h1>Welcome to the Admin Dashboard</h1>
            </header>
            <main className="admin-dashboard__main">
                <section className="admin-dashboard__section">
                    {/* Dashboard content goes here */}
                    <p>This is the main area for admin functionalities and information.</p>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
