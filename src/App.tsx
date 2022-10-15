import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './mock/routes';

function App() {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
