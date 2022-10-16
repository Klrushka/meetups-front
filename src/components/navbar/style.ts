import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #444544;
`;

export const NavbarList = styled.ul``;

export const NavbarItem = styled.li`
  display: inline-block;
  padding: 1px 10px 1px 10px;
  text-decoration: none;
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: white;
`;
