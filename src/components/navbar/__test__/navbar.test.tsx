import React from 'react';
import { HashRouter} from 'react-router-dom';
import rendered from 'react-test-renderer';
import App from 'src/App';
import { render } from '@testing-library/react';

describe('Navbar component', () => {

  it('Navbar component', async () => {
    const routes = render(
      <HashRouter>
        <App />
      </HashRouter>
    );

    //  Спросить про роутер
  });
});
