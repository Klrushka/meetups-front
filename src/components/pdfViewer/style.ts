import styled from 'styled-components';

export const PdfWrapper = styled.div`
  background-color: ${props => props.theme.background}
  height: 100vh;
`;
export const LinkWrapper = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.inputBackgrount}
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s;
  border-color: ${props => props.theme.border2}
  border-style: solid;
  border-width: 0.9px;
  border-color: #b0afae;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.05);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.text};
`;
