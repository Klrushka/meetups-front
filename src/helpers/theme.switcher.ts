import { getTheme } from '@themes';
import { Themes } from '@themes/themes.enum';
import { isThemeDark } from './theme.cheker';

export const themeSwithcher = setTheme => {
  return event => {
    if (!isThemeDark()) {
      setTheme(getTheme(Themes.DARK))
      localStorage.setItem('theme', Themes.DARK);
    } else {
      setTheme(getTheme(Themes.LIGHT));
      localStorage.setItem('theme', Themes.LIGHT);
    }
  };
};
