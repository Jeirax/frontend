import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/persons');
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };
    fetchPersons();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Person List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {persons.map((person) => (
          <div key={person.id_P} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{person.prenom} {person.nom}</h2>
            <p><strong>Skills:</strong> {person.competences}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonList;
