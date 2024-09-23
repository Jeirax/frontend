import React, { useState } from 'react';
import api from '../api/axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      onLogin(response.data.user);
    } catch (err) {
      setError(err.response?.data?.error || 'Email ou mot de passe incorrect');
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-700">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition"
      >
        Se connecter
      </button>
    </form>
  );
}

export default Login;