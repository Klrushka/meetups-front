import React from 'react';
import rendered, { act } from 'react-test-renderer';
import { NewMeetupWindow } from '../index';
import { mockMeetups } from './__mock__/data';
import { mockSetMeetups, mockSetWindowShow } from './__mock__/mock.functions';

describe('NewMeetup component', () => {
  let component: rendered.ReactTestRenderer;

  it('NewMeetup component', () => {
    act(() => {
      component = rendered.create(
        <NewMeetupWindow
          meetups={mockMeetups}
          setMeetups={mockSetMeetups}
          setWindowShow={mockSetWindowShow}
        />
      );
    });

    expect(component.toJSON).toMatchSnapshot();
  });
});
