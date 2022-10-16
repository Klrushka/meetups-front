import styled from 'styled-components';

export const PdfWrapper = styled.div`
  margin: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s;
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
  color: black;
`;
