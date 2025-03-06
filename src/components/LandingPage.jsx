import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (            
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <nav className="w-full bg-white shadow-md">
          <ul className="flex justify-center space-x-4 p-4">
            <li>
              <Link to="/todo" className="text-blue-500 hover:text-blue-700">
                To-Do List
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-blue-500 hover:text-blue-700">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <header className="mt-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to the Landing Page</h1>
        </header>
      </div>
  );
};

export default LandingPage;