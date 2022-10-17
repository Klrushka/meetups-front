import styled from 'styled-components';

export const NewMeetupWrapper = styled.div`
  background-color: ${props => props.theme.itemBackground}
  padding: 10px;
  margin-top: 100px;
  color: ${props => props.theme.text}
  border-style: solid;
  border-width: 0.9px;
  border-color: ${props => props.theme.border}
  border-radius: ${props => props.theme.borderRadius}
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CreateTitle = styled.p`
  font-size: x-large;
  font-weight: bolder;
`;

export const CreateButton = styled.button`
  appearance: none;
  background-color: ${props => props.theme.accent1}
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: ${props => props.theme.borderRadius}
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
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
  margin-top: 15px;

  &:hover {
    background-color: #00d627;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CreateInput = styled.input`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  background-color: ${props => props.theme.inputBackgrount}
  background-clip: padding-box;
  border-color: ${props => props.theme.border}
  border: 1px solid;
  appearance: none;
  border-radius: ${props => props.theme.borderRadius}
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: ${props => props.theme.text}
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;
