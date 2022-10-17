import React, { useContext } from 'react';
import { ThemePreferenceContext } from 'src/App';
import { themeSwithcher } from '@helpers';
import { isDark } from '@helpers/theme.cheker';
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Label,
  ThemeSwitcherWrapper,
} from './style';

export const ThemeSwitcher: React.FunctionComponent = () => {
  const theme = useContext(ThemePreferenceContext);

  return (
    <ThemeSwitcherWrapper>
      <Label>Theme</Label>
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          onClick={themeSwithcher(theme.setTheme)}
          defaultChecked={isDark()}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </ThemeSwitcherWrapper>
  );
};
