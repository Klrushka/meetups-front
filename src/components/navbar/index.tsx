import React, { useContext } from 'react';
import { ThemePreferenceContext } from 'src/App';
import { themeSwithcher } from '@helpers';
import { navbarRoutes } from '@mock/navbar.routes';
import { LinkWrapper, NavbarItem, NavbarList, NavbarWrapper } from './style';

export const Navbar: React.FunctionComponent = () => {
  const theme = useContext(ThemePreferenceContext);

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
        <NavbarItem>
          <input type={'checkbox'} onClick={themeSwithcher(theme.setTheme)} />
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};
