import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import { TodoWrapper } from './components/TodoWrapper';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate('/'); // Redirect to landing if not signed in
    return null;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/todos"
            element={
              <ProtectedRoute>
                <TodoWrapper />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;