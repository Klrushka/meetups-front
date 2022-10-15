import React from 'react';
import { navbarRoutes } from '@mock/navbar.routes';
import { LinkWrapper, NavbarItem, NavbarList, NavbarWrapper } from '@styled';

export const Navbar: React.FunctionComponent = () => {
  return (
    <NavbarWrapper>
      <NavbarList>
        {navbarRoutes.map(({ to, value }) => (
          <NavbarItem key={to}>
            <span>
              {' '}
              <LinkWrapper className="link" to={to}>
                {value}
              </LinkWrapper>
            </span>
          </NavbarItem>
        ))}
      </NavbarList>
    </NavbarWrapper>
  );
};
