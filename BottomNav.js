import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';

const BottomNav = () => (
  <BottomNavigation>
    <BottomNavigationAction label="Jobs" component={Link} to="/jobs" />
    <BottomNavigationAction label="Bookmarks" component={Link} to="/bookmarks" />
  </BottomNavigation>
);

export default BottomNav;
