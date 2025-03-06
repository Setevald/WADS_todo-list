import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const show = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <button 
          onClick={() => show('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Go to Landing Page
        </button>
        <button 
          onClick={() => show('/todo')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          Go to To Do List
        </button>
      </div>

      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <div className="w-32 h-32 mb-4">
          <img
            src="path/to/profile-picture.jpg"
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Steven Gm</h1>
          <p className="text-gray-700">
            Passionate about coding and technology.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;