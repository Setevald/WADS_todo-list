import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LandingPage() {
  const { currentUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/todos'); // Redirect to todos after sign-in
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Your Todo App</h1>
        <p className="text-xl mb-6">Organize your tasks with ease!</p>
        {currentUser ? (
          <Link to="/todos">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200">
              Go to Todo List
            </button>
          </Link>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            Sign In with Google
          </button>
        )}
      </div>
    </div>
  );
}

export default LandingPage;