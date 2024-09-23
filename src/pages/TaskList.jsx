import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Task List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id_T} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Task {task.id_T}</h2>
            <p><strong>Status:</strong> {task.statut}</p>
            <p><strong>State:</strong> {task.etat}</p>
            <p><strong>Category:</strong> {task.categorie}</p>
            <p><strong>Created by:</strong> {task.createur_prenom} {task.createur_nom}</p>
            <p><strong>Assigned to:</strong> {task.personnes_assignees}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
