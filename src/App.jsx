import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './pages/TaskList';
import PersonList from './pages/PersonList';
import AuthPage from './pages/Auth';

function App() {
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur connecté

  const handleLogin = (user) => {
    setUser(user); // Met à jour l'état de l'utilisateur connecté
    console.log('Utilisateur connecté:', user);
  };

  const handleLogout = () => {
    setUser(null); // Réinitialise l'état de l'utilisateur connecté
    localStorage.removeItem('token'); // Supprime le token du localStorage
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route 
            path="/" 
            element={user ? (
              <>
                <Navbar onLogout={handleLogout} />
                <div className="container mx-auto px-4 py-8">
                  <TaskList />
                </div>
              </>
            ) : (
              <Navigate to="/auth" />
            )} 
          />
          <Route 
            path="/persons" 
            element={user ? (
              <>
                <Navbar onLogout={handleLogout} />
                <div className="container mx-auto px-4 py-8">
                  <PersonList />
                </div>
              </>
            ) : (
              <Navigate to="/auth" />
            )} 
          />
          <Route 
            path="/auth" 
            element={
              user ? (
                <Navigate to="/" /> // Redirige vers le tableau de bord si déjà connecté
              ) : (
                <AuthPage onLogin={handleLogin} />
              )
            } 
          />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
