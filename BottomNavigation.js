// src/components/BottomNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavigation.css'; // Import your CSS for styling

const BottomNavigation = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/jobs" className="nav-item">
        Jobs
      </Link>
      <Link to="/bookmarks" className="nav-item">
        Bookmarks
      </Link>
    </nav>
  );
};

export default BottomNavigation;
