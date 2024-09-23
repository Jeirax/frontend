import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Todo DPC</Link>
        <div>
          <Link to="/" className="mr-4">Tasks</Link>
          <Link to="/persons">Persons</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
