import { isTrue } from './boolean.converter';

export const isDark = (): boolean => {
  localStorage.getItem('theme') ?? localStorage.setItem('theme', 'false');
  console.log('from isDark()', localStorage.getItem('theme'));
  return isTrue(localStorage.getItem('theme'));
};
