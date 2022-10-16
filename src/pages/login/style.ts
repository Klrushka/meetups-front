import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  color: white
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  justify-content: center;
`

export const FormInner = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  min-height: 75%;
  min-width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  color: black;
  border-style: solid;
  border-width: 0.9px;
  border-color: #b0afae;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.3s;
`

export const Input = styled.input`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`

export const Error = styled.p`
  color: red;
`

export const Label = styled.label`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: large;
`

export const Button = styled.button`
  appearance: none;
  background-color: #bcbcbc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
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

  &:hover {
    background-color: rgb( 128, 128, 128 );
}
`