import { Link } from 'react-router-dom';
import styled from 'styled-components';



const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;  
  width: 100%;
  background-color: #444544;
`

const NavbarList = styled.ul`
  
`

const NavbarItem = styled.li`
  display: inline-block;
  padding: 0.05rem 1rem 0.05rem 1rem;
  text-decoration: none;
  transition: 0.1s;

  &:hover {
    transform: scale(1.05);
  }
 
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: white;
` 

export {
  NavbarList,
  NavbarWrapper,
  NavbarItem,
  LinkWrapper,
}
