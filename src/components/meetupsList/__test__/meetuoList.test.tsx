import React from 'react';
import rendered, { act } from 'react-test-renderer';
import { MeetupList } from '../index';
import { mockMeetups } from './__mock__/data';
import { mockSetMeetups } from './__mock__/mock.functions';

describe('MeetupList component', () => {
  let component: rendered.ReactTestRenderer;

  it('MeetupList component', () => {
    act(() => {
      component = rendered.create(
        <MeetupList meetups={mockMeetups} setMeetups={mockSetMeetups} />
      );
    });

    expect(component.toJSON).toMatchSnapshot();
  });
});
