import React from 'react';
import rendered, { act } from 'react-test-renderer';
import { mockMeetup } from './__mock__/data';
import {Meetup} from '../index'
import { mockDeleteMeetup } from './__mock__/mock.functions';


describe('Meetup component', () => {
  let component: rendered.ReactTestRenderer;

  it('Meetup component', () => {
    act(() => {
      component = rendered.create(<Meetup meetup={mockMeetup} deleteMeetup={mockDeleteMeetup} />);
    });
  
    expect(component.toJSON).toMatchSnapshot()
  });

  it('meetup delete button', () => {
    component.root.findByType('button').props.onClick()
    expect(mockDeleteMeetup).toBeCalled();
  })
  
})
