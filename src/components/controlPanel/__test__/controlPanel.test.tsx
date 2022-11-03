import React from 'react';
import rendered, { act } from 'react-test-renderer';
import { ControlPanel } from '../index';
import { setIsShowMeetupRedactorWindow, setMeetupsMock, showModalMock } from './__mock__/mock.functions';

it('ControlPanel render', () => {
  let component: rendered.ReactTestRenderer;

  act(() => {
    component = rendered.create(
      <ControlPanel
        setShowModal={showModalMock}
        setMeetups={setMeetupsMock}
        meetups={[]}
        setIsShowMeetupRedactorWindow={setIsShowMeetupRedactorWindow}
      />
    );
  });

  expect(component.toJSON()).toMatchSnapshot();
});
