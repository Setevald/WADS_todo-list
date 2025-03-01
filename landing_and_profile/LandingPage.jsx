import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Your Todo App</h1>
        <p className="text-xl mb-6">Organize your tasks with ease!</p>
        <Link to="/todos">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200">
            Go to Todo List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;