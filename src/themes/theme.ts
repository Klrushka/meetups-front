import { Themes } from './themes.enum';

export const getTheme = (userTheme: Themes) => {
  const theme = { ...themes[userTheme], ...base };
  return theme;
};

const dark = {
  primary: 'black;',
  background: 'rgba(0.0, 0.0, 0.0, 1.0);',
  text: 'white;',
  nav: '#2C2C2EFF;',
  accent1: '#30D158FF;',
  accent2: '#FF453AFF;',
  inputBackgrount: '#EBEBF54D;',
  itemBackground: '#1C1C1EFF;',
  border: '#2C2C2EFF;',
  border2: '#EBEBF52E;',
  item2Background: '#2C2C2EFF;',
};

const light = {
  primary: 'white;',
  background: '#e0e0e0;',
  text: 'black;',
  nav: '#444544;',
  accent1: '#30D158FF;',
  accent2: '#FF453AFF;',
  inputBackgrount: 'white;',
  itemBackground: 'white;',
  border: '#b0afae;',
  border2: '#b0afae;',
  item2Background: '#cccccc;',
};

const base = {
  controlText: 'x-large;',
  controlFontWeight: '400;',
  csvTextAreaWidth: '600px;',
  csvTextAreaHeigth: '200px;',
  borderRadius: '5px;',
};

const themes = {
  [Themes.LIGHT]: light,
  [Themes.DARK]: dark,
};
