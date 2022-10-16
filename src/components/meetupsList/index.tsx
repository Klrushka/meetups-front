import React from 'react';
import { Meetup } from '@components';
import { IMeetup } from '@interfaces/meetup.interface';
import { deleteMeetup } from '@mock/backend';
import { SectionWrapper } from './style';

// import { deleteMeetup } from '@api/delete.meetup.api';

export const MeetupList: React.FC<{
  meetups: IMeetup[];
  setMeetups: React.Dispatch<React.SetStateAction<IMeetup[]>>;
}> = ({ meetups, setMeetups }) => {
  const removeMeetup = async (id: string) => {
    const deletedMeetup = await deleteMeetup(id);
    if (deletedMeetup.status === 204) {
      setMeetups(meetups.filter(meetup => meetup._id !== id));
    } else {
      window.alert('Forbidden');
    }
  };

  return (
    <SectionWrapper>
      {meetups.map(meetup => {
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
    </SectionWrapper>
  );
};
