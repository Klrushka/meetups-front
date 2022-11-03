import React from 'react';
import rendered, { act } from 'react-test-renderer';
import { Meetup } from '../index';
import { mockMeetup } from './__mock__/data';
import {
  mockDeleteMeetup,
  setIsShowMeetupRedactorWindow,
  setSeletedMeetupId,
} from './__mock__/mock.functions';

describe('Meetup component', () => {
  let component: rendered.ReactTestRenderer;

  it('Meetup component', () => {
    act(() => {
      component = rendered.create(
        <Meetup
          meetup={mockMeetup}
          deleteMeetup={mockDeleteMeetup}
          onClick={() => {
            setSeletedMeetupId();
            setIsShowMeetupRedactorWindow();
          }}
        />
      );
    });

    expect(component.toJSON).toMatchSnapshot();
  });

  it('meetup delete button', () => {
    component.root.findByType('button').props.onClick();
    expect(mockDeleteMeetup).toBeCalled();
  });
});
