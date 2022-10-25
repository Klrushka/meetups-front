import React from 'react';
import rendered, { act } from 'react-test-renderer';
import {ThemeSwitcher} from '../index'


describe('Theme swtcher component', () => {
  let component: rendered.ReactTestRenderer;

  it('Meetup component', () => {
    act(() => {
      component = rendered.create(<ThemeSwitcher />);
    });
  
    expect(component.toJSON).toMatchSnapshot()
  });
 
})
