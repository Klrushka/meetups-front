import styled from 'styled-components';

export const MeetupWrapper = styled.div`
  word-break: break-all;
  background-color: white;
  padding: 1rem;
  margin: 2rem;
  color: black;
  border-style: solid;
  border-width: 0.9px;
  border-color: #b0afae; 
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.3s;
 

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.05);
  }
`