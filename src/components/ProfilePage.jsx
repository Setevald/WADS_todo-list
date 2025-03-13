import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported

function ProfilePage() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleBackToTodos = () => {
        navigate('/todos'); // Navigate back to todo list
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
            <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 text-center">
                {/* Profile Picture */}
                <img
                    src={currentUser?.photoURL || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />

                {/* Profile Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {currentUser?.displayName || 'Anonymous User'}
                </h2>

                {/* Short Bio or Email */}
                <p className="text-gray-600 mb-4">
                    {currentUser?.email || 'No bio available'}
                </p>

                {/* Buttons */}
                <div className="space-x-4">
                    <button
                        onClick={handleBackToTodos}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                        Back to Todo List
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;