import React, { useState } from 'react';
import api from '../api/axios';

function Register() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await api.post('/register', { nom, prenom, email, password });
        setMessage(response.data.message);
        setError('');
        setNom('');
        setPrenom('');
        setEmail('');
        setPassword('');
    } catch (err) {
        console.log(err); // Log complet de l'erreur
        if (err.response) {
            setError(err.response.data?.error || 'Une erreur s\'est produite lors de l\'inscription');
        } else {
            setError('Problème de connexion au serveur');
        }
        setMessage('');
    }
};
return (
  <form onSubmit={handleSubmit} className="space-y-4">
    {message && <p className="text-green-500 text-center">{message}</p>}
    {error && <p className="text-red-500 text-center">{error}</p>}
    <div className="flex flex-col">
      <label htmlFor="nom" className="text-gray-700">Nom</label>
      <input
        type="text"
        id="nom"
        placeholder="Votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="prenom" className="text-gray-700">Prénom</label>
      <input
        type="text"
        id="prenom"
        placeholder="Votre prénom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
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
      S'inscrire
    </button>
  </form>
);
}

export default Register;