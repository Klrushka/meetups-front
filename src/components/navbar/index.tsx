import React from 'react';
import { Link } from 'react-router-dom';
import { navbarRoutes } from '../../mock/navbar.routes';
import './index.css';

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav className='nav-menu'>
      <div className='nav-items'>
        <ul>
          <li>
              <img src='meetups.png' alt='meetups'/>
          </li>
          {navbarRoutes.map(route => (
            <li>
            <span> <Link className='link' to={route.to}>{route.value}</Link></span>
          </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
