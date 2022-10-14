import styled from 'styled-components';

const MeetupWrapper = styled.div`
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

const Tags = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`

const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: large;
`

const Title = styled.p`
  font-weight: bolder;
`

const DateMap = styled.div`
`

const Location = styled.div`
  padding-left: 8rem;
  transition: 0.5s;

  &: hover{
    transform: scale(1.05);
  }
`

const Link = styled.a`
  text-decoration: none;
  color: black;
`

const ListItem = styled.li` 
  word-break: keep-all;
  word-break: none;
  margin: 0.5rem 2rem 0.5rem 0;
  background: #cccccc;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border-radius: 5px;
  border-style: solid;
  border-width: 0.9px;
  border-color: #b0afae; 
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
`

const Button = styled.button`
  appearance: none;
  background-color: #bcbcbc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
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

`

export {
  MeetupWrapper,
  Tags, 
  HeadWrapper,
  Title,
  DateMap,
  Location,
  Link,
  ListItem,
  Button,
}