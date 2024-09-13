// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './components/JobList';
import BookmarkList from './components/BookmarkList'; // Ensure this path is correct
import JobDetail from './components/JobDetail';
import BottomNavigation from './components/BottomNavigation';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/jobs" element={<JobList />} />
          <Route path="/bookmarks" element={<BookmarkList />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
        </Routes>
        <BottomNavigation />
      </div>
    </Router>
  );
};

export default App;
