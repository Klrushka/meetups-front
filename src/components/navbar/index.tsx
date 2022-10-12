import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav className='nav-menu'>
      <div className='nav-items'>
        <ul>
          <li>
              <img src='meetups.png' alt='meetups'/>
          </li>
          <li>
            <span> <Link className='link' to='/pdf'>PDF</Link></span>
          </li>
          <li>
            <span><Link className='link' to='/meetups'> Meetups </Link></span>
          </li>
          <li>
            <span> <Link className='link' to='/csv'> CSV </Link></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
