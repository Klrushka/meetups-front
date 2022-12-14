import styled from 'styled-components';

export const ControlPanelWrapper = styled.div``;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px 10px 100px;
`;

export const Span = styled.span`
  font-size: ${props => props.theme.controlText};
  color: ${props => props.theme.text};
`;
export const Button = styled.button`
  background: ${props => props.theme.accent1}
  border-color: ${props => props.theme.accent1}
  color: white;
  border-radius: 5px;
  padding: 10px 50px;
  transition: 0.1s;

  &:hover {
    background: #00d627;
  }
`;

export const InputWrapper = styled.div`
  padding: 1px 0px 1px 100px;
  display: flex;
`;

export const Input = styled.input`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: ${props => props.theme.controlFontWeight}
  line-height: 1.5;
  color: #212529;
  background-color: ${props => props.theme.inputBackgrount}
  border-color: ${props => props.theme.accent1}
  background-clip: padding-box;
  border: 1px solid;
  appearance: none;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: ${props => props.theme.text}
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;
