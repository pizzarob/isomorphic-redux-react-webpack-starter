import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link style={{ marginLeft: '15px' }} to="/about">About</Link>
    </nav>
  );
}

export default Navigation;
