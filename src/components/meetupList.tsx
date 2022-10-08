import { Meetup } from './meetup';
import '../styles/meetupList.css';
import { useEffect, useState } from 'react';
import { IMeetup } from '../interfaces/meetup';
import { data } from '../mock/data'

export const MeetupList = () => {
  const [meetups, setMeetups] = useState<IMeetup[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.fetch('http://localhost:3001/meetups', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2MyOWU4MjVjYjQ0MjE4M2ZhZTk4NyIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE2NjQ4OTkzNjUsImV4cCI6MTY2NDk4NTc2NX0.LPfTbWiWoBwBxfEOvCE1gQKNkzCAkjbosX5T55BLYNE',
        },
      });
      const jsonResult = await result.json();

      setMeetups(jsonResult);
    };

    setMeetups(data);
    // fetchData();
  }, []);
  return (
    <section className='meetup-list'>
      {meetups.map((meetup) => {
        return <Meetup key={meetup._id} meetup={meetup} />;
      })}
    </section>
  );
};
