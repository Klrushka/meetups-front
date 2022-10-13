import React from 'react';
import { Link } from 'react-router-dom';
import { navbarRoutes } from '@mock/navbar.routes';
import { LinkWrapper, NavbarItem, NavbarList, NavbarWrapper } from '@styled';

export const Navbar: React.FunctionComponent = () => {
  return (
    <NavbarWrapper>
        <NavbarList>
          {navbarRoutes.map(route => (
            <NavbarItem>
            <span> <LinkWrapper className='link' to={route.to}>{route.value}</LinkWrapper></span>
          </NavbarItem>
          ))}
        </NavbarList>
    </NavbarWrapper>
  );
};
