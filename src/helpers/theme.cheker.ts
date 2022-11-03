import { Themes } from '@themes';

export const getThemeFromLocalStorage = (): string => {
  localStorage.getItem('theme') ?? localStorage.setItem('theme', Themes.LIGHT);
  return localStorage.getItem('theme');
};


export const isThemeDark = (): boolean => {
  return getThemeFromLocalStorage() === 'dark' ? true : false
}