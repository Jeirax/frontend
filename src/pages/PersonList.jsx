import React, { useState, useEffect } from 'react';
import api from '../api/axios';

function PersonList() {
  const [persons, setPersons] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await api.get('/persons');
        setPersons(response.data);
      } catch (err) {
        setError('Erreur lors du chargement des personnes');
        console.error(err);
      }
    };

    fetchPersons();
  }, []);

  return (
    <div>
      <h2>Liste des personnes</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.nom} - Compétences: {person.competences}</li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;