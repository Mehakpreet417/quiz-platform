// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Quiz Platform</Link>
        </div>
        <div className="nav-links">
          <Link to="/create" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            Create Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
