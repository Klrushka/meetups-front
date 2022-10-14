import { useEffect, useState } from 'react';
import { ControlPanel } from '@components/control-panel';
import { MeetupList } from '@components/meetups-list';
import { Navbar } from '@components/navbar';
import { NewMeetupWindow } from '@components/new-meetup';
import { getToken } from '@helpers/token';
import { NotAuthPage } from '../not-auth-page';
import '@components/meetups-list';
import { IMeetup } from '@interfaces/meetup.interface';
import { data } from '@mock/data';
import { fetchData } from '@api';
import { MainPanel, MeetupInfo, MeetupListWrapper, MeetupPageWrapper } from '@styled';
import { Main } from '@styled/main';

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
            <ControlPanel setShowModal={setShowModal} meetups={meetups} setMeetups={setMeetups} />
            <MeetupListWrapper>
              <MeetupList meetups={meetups} setMeetups={setMeetups} />
            </MeetupListWrapper>
          </MainPanel>
          <MeetupInfo>
          {showModal && <NewMeetupWindow setWindowShow={setShowModal}  meetups={meetups} setMeetups={setMeetups}/>}
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
