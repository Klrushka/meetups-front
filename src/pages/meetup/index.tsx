import React, { useEffect, useState } from 'react';
import { ControlPanel, MeetupList, Navbar, NewMeetupWindow } from '@components';
import { getToken } from '@helpers';
import { IMeetup } from '@interfaces';
// import { data } from '@mock';
import { NotAuthPage } from '../not-auth';
import { fetchData } from '@api';
import {
  Main,
  MainPanel,
  MeetupInfo,
  MeetupListWrapper,
  MeetupPageWrapper,
} from './style';

export const MeetupPage = () => {
  const token = getToken();
  const [showModal, setShowModal] = useState(false);
  const [meetups, setMeetups] = useState<IMeetup[]>([]);

  useEffect(() => {
    // setMeetups(data);
    fetchData(setMeetups);
  }, []);

  if (token) {
    return (
      <MeetupPageWrapper>
        <Navbar />
        <Main>
          <MainPanel>
            <ControlPanel
              setShowModal={setShowModal}
              meetups={meetups}
              setMeetups={setMeetups}
            />
            <MeetupListWrapper>
              <MeetupList meetups={meetups} setMeetups={setMeetups} />
            </MeetupListWrapper>
          </MainPanel>
          <MeetupInfo>
            {showModal && (
              <NewMeetupWindow
                setWindowShow={setShowModal}
                meetups={meetups}
                setMeetups={setMeetups}
              />
            )}
          </MeetupInfo>
        </Main>
      </MeetupPageWrapper>
    );
  } else {
    return (
      <div>
        <NotAuthPage />
      </div>
    );
  }
};
