import styled from 'styled-components';

export const CSVWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  heigth: 100vh;
}
`;

export const TextArea = styled.textarea`
  resize: none;
  width: ${props => props.theme.csvTextAreaWidth}
  height: ${props => props.theme.csvTextAreaHeigth}
  color: ${props => props.theme.text}
  background-color: ${props => props.theme.inputBackgrount}
  border-color: ${props => props.theme.border}
`;
