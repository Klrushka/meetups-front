import React from 'react';
import '../styles/navbar.css';

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav className='nav-menu'>
      <div className='nav-items'>
        <ul>
          <li>
              <img src='meetups.png' alt='meetups'/>
          </li>
          <li>
            <a href='/#'> About </a>
          </li>
          <li>
            <a href='/#'> Meetups </a>
          </li>
          <li>
            <a href='/#'> Home </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
