import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token1');

    // If there is no token, redirect to login
    if (!token) {
        return <Navigate to="/login" />;
    }

    return children; // Render the protected component if the user is logged in
};

export default ProtectedRoute;
