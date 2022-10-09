import { useEffect, useState } from 'react';
import { ControlPanel } from '../components/controlPanel';
import { MeetupList } from '../components/meetupList';
import { Navbar } from '../components/navbar';
import { NewMeetupWindow } from '../components/newMeetup';
import { getToken } from '../services/token';
import { NotAuthPage } from './notAuthPage';
import '../styles/meetupPage.css'
import { IMeetup } from '../interfaces/meetup';



export const MeetupPage = () => {
  const token = getToken();
  const [showModal, setShowModal] = useState(false);
  const [meetups, setMeetups] = useState<IMeetup[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await window.fetch('http://localhost:3001/meetups', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      const jsonResult = await result.json();

      setMeetups(jsonResult);
    };

    // setMeetups(data);
    fetchData();
  }, []);

  if (token) {
    return (
      <div>
        {showModal && <NewMeetupWindow setWindowShow={setShowModal}  meetups={meetups} setMeetups={setMeetups}/>}
        <div className={showModal && 'blur'}>
          <ControlPanel setShowModal={setShowModal}  meetups={meetups} setMeetups={setMeetups} />
          <Navbar />
          <MeetupList meetups={meetups} setMeetups={setMeetups}/>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NotAuthPage />
      </div>
    );
  }
};
