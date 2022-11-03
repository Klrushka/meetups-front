import React from 'react';
import rendered, { act } from 'react-test-renderer';
import { MeetupList } from '../index';
import { mockMeetups } from './__mock__/data';
import {
  mockSetMeetups,
  setIsShowMeetupRedactorWindow,
  setSeletedMeetupId,
  setWindowShow,
} from './__mock__/mock.functions';

describe('MeetupList component', () => {
  let component: rendered.ReactTestRenderer;

  it('MeetupList component', () => {
    act(() => {
      component = rendered.create(
        <MeetupList
          meetups={mockMeetups}
          setMeetups={mockSetMeetups}
          setIsShowMeetupRedactorWindow={setIsShowMeetupRedactorWindow}
          setSeletedMeetupId={setSeletedMeetupId}
          setWindowShow={setWindowShow}
        />
      );
    });

    expect(component.toJSON).toMatchSnapshot();
  });
});
