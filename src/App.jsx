import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './pages/TaskList';
import PersonList from './pages/PersonList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/persons" element={<PersonList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
