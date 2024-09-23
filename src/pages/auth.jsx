import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register'

function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true); // État pour basculer entre login et register

  const toggleAuthMode = () => {
    setIsLogin(!isLogin); // Bascule l'état
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl text-center mb-4">{isLogin ? 'Connexion' : 'Inscription'}</h2>
        {isLogin ? (
          <>
            <Login onLogin={onLogin} />
            <p className="mt-4 text-center">
              Pas encore de compte ?{' '}
              <button onClick={toggleAuthMode} className="text-blue-500 underline">
                Inscrivez-vous
              </button>
            </p>
          </>
        ) : (
          <>
            <Register />
            <p className="mt-4 text-center">
              Vous avez déjà un compte ?{' '}
              <button onClick={toggleAuthMode} className="text-blue-500 underline">
                Connectez-vous
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPage;