import { Meetup } from './meetup';
import '../styles/meetupList.css';
import { IMeetup } from '../interfaces/meetup';
import { getToken } from '../services/token';

export const MeetupList: React.FC<{meetups: IMeetup[], setMeetups: Function}> = ({meetups, setMeetups}) => {

  const deleteMeetup = async (id: string) => {
    const deletedMeetup = await window.fetch(
      `http://localhost:3001/meetups/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )

    if (deletedMeetup.status === 204) {
      setMeetups(meetups.filter((meetup) => meetup._id !== id));
    } else {
      window.alert('Forbidden')
    }
  };


  return (
    <section className='meetup-list'>
      {meetups.map((meetup) => {
        return (
          <Meetup
            key={meetup._id}
            meetup={meetup}
            deleteMeetup={() => {
              deleteMeetup(meetup._id);
            }}
          />
        );
      })}
    </section>
  );
};
