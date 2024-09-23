import React, { useState, useEffect } from 'react';
import api from '../api/axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (err) {
        setError('Erreur lors du chargement des tâches');
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Liste des tâches</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;