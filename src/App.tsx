import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from '@mock';
import { getTheme } from '@themes/theme';
import { Themes } from '@themes/themes.enum';
import { getThemeFromLocalStorage, isThemeDark } from '@helpers';

export const ThemePreferenceContext = React.createContext({
  theme: getTheme(Themes.DARK),
  setTheme: theme => theme,
});

function App() {
  const userTheme = isThemeDark() ? Themes.DARK : Themes.LIGHT;
  const [theme, setTheme] = useState(getTheme(userTheme));

  return (
    <ThemePreferenceContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
