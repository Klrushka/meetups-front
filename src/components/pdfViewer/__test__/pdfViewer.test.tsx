import React from 'react';
import rendered, { act } from 'react-test-renderer';
import {Pdf} from '../index'


describe('PDF component', () => {
  let component: rendered.ReactTestRenderer;

  it('PDF component', () => {
    act(() => {
      component = rendered.create(<Pdf />);
    });
  
    expect(component.toJSON).toMatchSnapshot()
  });
  
})
