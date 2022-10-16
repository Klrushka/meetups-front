import styled from 'styled-components';

export const MeetupWrapper = styled.div`
  word-break: break-all;
  background-color: ${props => props.theme.itemBackground}
  padding: 30px;
  margin: 25px;
  color: ${props => props.theme.text}
  border-style: solid;
  border-width: 0.9px;
  border-color: ${props => props.theme.border}
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.3s;

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.05);
  }
`;

export const Tags = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`;

export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: large;
`;

export const Title = styled.p`
  font-weight: bolder;
`;

export const DateMap = styled.div``;

export const Location = styled.div`
  padding-left: 130px;
  transition: 0.5s;

  &: hover {
    transform: scale(1.05);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.text};
`;

export const ListItem = styled.li`
  word-break: keep-all;
  word-break: none;
  margin: 10px 20px 10px 0;
  background: ${props => props.theme.item2Background}
  padding: 5px 40px 5px 40px;
  border-radius: 5px;
  border-style: solid;
  border-width: 0.9px;
  border-color: ${props => props.theme.border2}
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Button = styled.button`
  appearance: none;
  background-color: ${props => props.theme.accent2}
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;

  &:hover {
    background-color: red;
  }
`;
