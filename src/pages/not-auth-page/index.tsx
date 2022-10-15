import React from 'react';
import { Link } from 'react-router-dom';

export const NotAuthPage = () => {
  return (
    <div>
      <Link to={'/login'}>Please log in</Link>
    </div>
  );
};
