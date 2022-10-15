import React, { useEffect, useState } from 'react';
import { ControlPanel, MeetupList, Navbar, NewMeetupWindow } from '@components';
import { getToken } from '@helpers';
import { IMeetup } from '@interfaces';
import { data } from '@mock';
// import { fetchData } from '@api';
import {
  MainPanel,
  MeetupInfo,
  MeetupListWrapper,
  MeetupPageWrapper,
} from '@styled';
import { Main } from '@styled/main';
import { NotAuthPage } from '../not-auth-page';

export const MeetupPage = () => {
  const token = getToken();
  const [showModal, setShowModal] = useState(false);
  const [meetups, setMeetups] = useState<IMeetup[]>([]);

  useEffect(() => {
    setMeetups(data);
    // fetchData(setMeetups);
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
      // <div>
      //   {showModal && <NewMeetupWindow setWindowShow={setShowModal}  meetups={meetups} setMeetups={setMeetups}/>}
      //   <div className={showModal && 'blur'}>
      //     <ControlPanel setShowModal={setShowModal}  meetups={meetups} setMeetups={setMeetups} />
      //     <Navbar />
      //     <MeetupList meetups={meetups} setMeetups={setMeetups}/>
      //   </div>
      // </div>
    );
  } else {
    return (
      <div>
        <NotAuthPage />
      </div>
    );
  }
};
