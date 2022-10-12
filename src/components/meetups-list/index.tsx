import { Meetup } from '../meetup';
import './index.css';
import { IMeetup } from '../../interfaces/meetup.interface';
import { deleteMeetup } from '../../api/delete.meetup';

export const MeetupList: React.FC<{meetups: IMeetup[], setMeetups: Function}> = ({meetups, setMeetups}) => {

  const removeMeetup = async (id: string) => {
   const deletedMeetup = await deleteMeetup(id);
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
              removeMeetup(meetup._id);
            }}
          />
        );
      })}
    </section>
  );
};
