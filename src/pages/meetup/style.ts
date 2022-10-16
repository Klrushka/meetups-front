import styled from 'styled-components';

export const MeetupPageWrapper = styled.div`
  background-color: #e0e0e0;
  margin: 0;
  padding: 0;
  display: block;
`;

export const MainPanel = styled.div`
  width: 50%;
  float: left;
`;

export const MeetupInfo = styled.div`
  display: flex;
  width: 50%;
  float: right;
  justify-content: center;
  align-items: center;
`;

export const MeetupListWrapper = styled.div`
  background-color: transparent;
  overflow: scroll;
  height: 100vh;
  color: white;
  display: flex;
  overflow-x: hidden;
`;

export const Main = styled.div`
  display: flex;
`;
