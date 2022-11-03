import React, { useEffect, useState } from 'react';
import { fetchData } from '@api';
import {
  ControlPanel,
  MeetupList,
  MeetupRedactor,
  Navbar,
  NewMeetupWindow,
} from '@components';
import { getToken } from '@helpers';
import { getMeetupByIdFromMeetupList } from '@helpers/meetup';
import { IMeetup } from '@interfaces';
// import { data } from '@mock';
import { NotAuthPage } from '../not-auth';
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
  const [selectedMeetupId, setSeletedMeetupId] = useState<string>('');
  const [isShowMeetupRedactorWindow, setIsShowMeetupRedactorWindow] =
    useState<boolean>(false);

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
              setIsShowMeetupRedactorWindow={setIsShowMeetupRedactorWindow}
            />
            <MeetupListWrapper>
              <MeetupList
                meetups={meetups}
                setMeetups={setMeetups}
                setSeletedMeetupId={setSeletedMeetupId}
                setIsShowMeetupRedactorWindow={setIsShowMeetupRedactorWindow}
                setWindowShow={setShowModal}
              />
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
            {isShowMeetupRedactorWindow && (
              <MeetupRedactor
                meetup={getMeetupByIdFromMeetupList(meetups, selectedMeetupId)}
                setMeetups={setMeetups}
                setWindowShow={setIsShowMeetupRedactorWindow}
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
