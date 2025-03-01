import React from 'react';

function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 text-center">
        {/* Profile Picture */}
        <img
          src="https://stspresourceprod.blob.core.windows.net/basicpersonalphoto/profilephoto/63cf91d9-e5b8-47d0-ae42-c0ff1787ee2d.png?sv=2024-05-04&se=9999-12-31T23%3A59%3A59Z&sr=b&sp=r&sig=%2FZzbk4onOMGW6iPMkPgTC%2BLJu1OvMeZJc%2BUS4uy7uX4%3D" // Placeholder image
          alt="Steven Gerald Marlent"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />

        {/* Profile Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Steven Gerald Marlent</h2>

        {/* Short Bio */}
        <p className="text-gray-600">
          A Computer science student at Binus University and 
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;